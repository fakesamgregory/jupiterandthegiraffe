import { environment } from '../environments/environment';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild, Optional, NgZone } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {filter} from 'rxjs/operators';
import {forkJoin, of} from 'rxjs';
import {AosToken} from './aos';
import { WordpressService } from './services/wordpress.service';
import { HighlightedFriendsService } from './stores/highlighted-friends.service';
import { ServicesService } from './stores/services.service';
import { CaseStudiesService } from './stores/case-studies-store.service';
import { HomepageService } from './stores/homepage-store.service';
import { WindowRef } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public showHeader = false;
  public isHome = false;
  public isFunnel: boolean;
  public isLandingPage: boolean;
  public isKeyboardUser = false;
  public hasBeenHome = false;
  public hideCookie = false;
  public footerPos = 0;
  public isCaseStudy = false;
  public menuOpen = false;
  public loading = false;
  private scrollInterval: any;
  public services: Array<any>;
  private eventOptions: boolean|{capture?: boolean, passive?: boolean};
  private isPassiveSupported = false;

  public ngOnDestroy() {
    if (this.scrollInterval) {
      clearTimeout(this.scrollInterval);
    }

    this.winRef.nativeWindow.removeEventListener('scroll', this.scroll, this.eventOptions as any);
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: any,
    @Inject(AosToken) aos,
    private winRef: WindowRef,
    private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private router: Router,
    private wordpress: WordpressService,
    public friendsStore: HighlightedFriendsService,
    public serviceStore: ServicesService,
    public homepageStore: HomepageService,
    public caseStudiesStore: CaseStudiesService,
    private ngZone: NgZone) {
      if (isPlatformBrowser(this.platformId)) {
        aos.init({
          duration: 800,
          once: true
        });

        const link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.document.head.appendChild(link);
        link.setAttribute('href', this.document.URL.replace('/production', ''));
      }

      this.angulartics2GoogleTagManager.startTracking();

      this.router.events
        .pipe(filter(event => event instanceof NavigationStart))
        .subscribe((event: NavigationStart) => {
          this.loading = true;
        });

      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.loading = false;
          this.hasBeenHome = this.isHome = /\/(#.+)?$/.test(event.url);
          this.isFunnel = event.urlAfterRedirects.includes('free-strategy');
          this.isLandingPage =
            event.urlAfterRedirects.includes('how-to-launch-an-awesome-tech-brand') ||
            event.urlAfterRedirects.includes('mvp-package') ||
            event.urlAfterRedirects.includes('website-package');

          if (isPlatformBrowser(this.platformId)) {
            this.winRef.nativeWindow.scrollTo(0, 0);
          }

          this.isCaseStudy = event.urlAfterRedirects.includes('case-study');

          this.toggleMenu.call(this, false);
        });

      this.loadFriends();
      this.loadServices();
      this.loadHome();
      this.loadWork();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.eventOptions = this.passiveSupported() ? {
          capture: true,
          passive: true
      } : false;

      this.ngZone.runOutsideAngular(() => {
        this.winRef.nativeWindow.addEventListener('scroll', this.scroll.bind(this), this.eventOptions as any);
      });
    }

    if (!isPlatformBrowser(this.platformId)) {
      const bases = this.document.getElementsByTagName('base');

      if (bases.length > 0) {
          bases[0].setAttribute('href', environment.baseHref);
      }
    }
  }

  private scroll(): void {
    if (Boolean(this.scrollInterval)) {
      this.winRef.nativeWindow.clearTimeout(this.scrollInterval);
    }

    this.scrollInterval = this.winRef.nativeWindow.setTimeout(() => {
      const scrollY = this.winRef.nativeWindow.pageYOffset || this.document.documentElement.scrollTop;
      this.showHeader = (scrollY > 400);
      this.hideCookie = (scrollY > this.footerPos);
    }, 50);
  }

  public toggleMenu(forceState?) {
    this.menuOpen = forceState !== undefined ? forceState : !this.menuOpen;
  }

  private loadFriends(): void {
    this.wordpress.getPageId(293)
      .subscribe((content: any) => {
        const friendPageContent =
          content.acf.featured_friends.map(friend => {
            if (friend.friends) {
              return this.wordpress.getPostTypeById(friend.friends.post_type, friend.friends.ID);
            }

            return of(friend.image);
          });

        forkJoin(friendPageContent)
          .subscribe((friends) =>
            friends.forEach(friend => this.friendsStore.addFriend(friend)));
      });
  }

  private loadServices(): void {
    this.wordpress.getPostType('services')
      .subscribe(data => this.serviceStore.services = data);
  }

  private loadHome(): void {
    this.wordpress.getPageId(293)
      .subscribe(data => this.homepageStore.homepage = data);
  }

  private loadWork(): void {
    this.wordpress.getPostType('friends')
      .subscribe(data => this.caseStudiesStore.caseStudies = data);
  }

  private passiveSupported() {
    let isPassiveSupported = false;
    try {
      const options = {
        get passive() {
          isPassiveSupported = true;
          return true;
        }
      };

      this.winRef.nativeWindow.addEventListener('test', null, options);
      this.winRef.nativeWindow.removeEventListener('test', null);
    } catch (err) {
      isPassiveSupported = false;
    }

    return isPassiveSupported;
  }

  public scrollTo(event): void {
    event.preventDefault();

    const target = event.target;
    let top = Number(target.dataset.position);

    if (!top) {
      const el = document.querySelector(target.dataset.position);
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      top = rect.top + scrollTop;
    }

    this.winRef.nativeWindow.scrollTo({
      top,
      behavior: 'smooth',
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (Boolean(this.scrollInterval)) {
        this.winRef.nativeWindow.clearTimeout(this.scrollInterval);
      }

      this.scrollInterval = this.winRef.nativeWindow.setTimeout(() => {
        const scrollY = this.winRef.nativeWindow.pageYOffset || this.document.documentElement.scrollTop;
        this.showHeader = (scrollY > 400);
        this.hideCookie = (scrollY > this.footerPos);
      }, 50);
    }
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.key === 'Tab' && !this.isKeyboardUser) {
      this.isKeyboardUser = true;
    }
  }

  @HostListener('window:click', [])
  windowClick() {
    if (this.isKeyboardUser) {
      this.isKeyboardUser = false;
    }
  }
}
