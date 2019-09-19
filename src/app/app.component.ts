import {isPlatformBrowser, DOCUMENT} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';
import {Component, ElementRef, HostListener, Inject, OnDestroy, PLATFORM_ID, ViewChild, Optional, NgZone, OnInit} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import {AosToken} from './aos';
import {filter} from 'rxjs/operators';
import {HighlightedFriendsService} from './stores/highlighted-friends.service';
import {ServicesService} from './stores/services.service';
import {WordpressService} from './services/wordpress.service';
import {forkJoin, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
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

    this.window.removeEventListener('scroll', this.scroll, this.eventOptions as any);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              @Inject(DOCUMENT) private document: any,
              @Optional() @Inject(WINDOW) private window: Window,
              private router: Router,
              private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
              @Inject(AosToken) aos,
              public friendsStore: HighlightedFriendsService,
              public serviceStore: ServicesService,
              private wordpress: WordpressService,
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
        this.hasBeenHome = this.isHome = event.url === '/';
        this.isFunnel = event.urlAfterRedirects.includes('free-strategy');
        this.isLandingPage = event.urlAfterRedirects.includes('how-to-launch-an-awesome-tech-brand');

        if (isPlatformBrowser(this.platformId)) {
          this.window.scrollTo(0, 0);
        }

        this.isCaseStudy = event.urlAfterRedirects.includes('case-study');

        this.toggleMenu.call(this, false);
      });

    this.loadFriends();
    this.loadServices();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.eventOptions = this.passiveSupported() ? {
          capture: true,
          passive: true
      } : false;

      this.ngZone.runOutsideAngular(() => {
        this.window.addEventListener('scroll', this.scroll.bind(this), this.eventOptions as any);
      });
    }
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

      this.window.addEventListener('test', null, options);
      this.window.removeEventListener('test', null);
    } catch(err) {
      isPassiveSupported = false;
    }

    return isPassiveSupported;
  }

  private scroll(): void {
    if (Boolean(this.scrollInterval)) {
      this.window.clearTimeout(this.scrollInterval);
    }

    this.scrollInterval = this.window.setTimeout(() => {
      const scrollY = this.window.pageYOffset || this.document.documentElement.scrollTop;
      this.showHeader = (scrollY > 400);
      this.hideCookie = (scrollY > this.footerPos);
    }, 50);
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
          .subscribe((friends) => this.friendsStore.friends = friends);
      });
  }

  private loadServices(): void {
    this.wordpress.getPostType('services')
      .subscribe(data => this.serviceStore.services = data);
  }

  public toggleMenu(forceState?) {
    this.menuOpen = forceState !== undefined ? forceState : !this.menuOpen;
  }

  public scrollTo(data): void {
    data.event.preventDefault();

    const target = data.target;
    let top = Number(target.dataset.position);

    if (!top) {
      const el = document.querySelector(target.dataset.position);
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      top = rect.top + scrollTop;
    }

    this.window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }

  public scrollUp(e): void {
    e.preventDefault();
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
