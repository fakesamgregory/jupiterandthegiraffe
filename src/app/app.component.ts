import {isPlatformBrowser, DOCUMENT} from '@angular/common';
import {environment} from '../environments/environment';
import {WINDOW} from '@ng-toolkit/universal';
import {Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import {AosToken} from './aos';
import {filter} from 'rxjs/operators';
import {HighlightedFriendsService} from './stores/highlighted-friends.service';
import {WordpressService} from './services/wordpress.service';
import {forkJoin, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  showHeader = false;
  isHome = false;
  isKeyboardUser = false;
  hasBeenHome = false;
  hideCookie = false;
  footerPos = 0;
  isCaseStudy = false;
  private scrollInterval: any;
  @ViewChild('footer', {read: ElementRef}) footer: ElementRef;

  public ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      const bases = this.document.getElementsByTagName('base');

      if (bases.length > 0) {
        bases[0].setAttribute('href', environment.baseHref);
      }
    }
  }

  public ngOnDestroy() {
    if (this.scrollInterval) {
      clearTimeout(this.scrollInterval);
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any,
              @Inject(DOCUMENT) private document: any,
              @Inject(WINDOW) private window: Window,
              private router: Router,
              private angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
              @Inject(AosToken) aos,
              public friendsStore: HighlightedFriendsService,
              private wordpress: WordpressService) {

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
        this.isHome = event.url === '/';

        if (event.url === '/') {
          this.hasBeenHome = true;
        }
      });


    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (isPlatformBrowser(this.platformId)) {
          this.footerPos = this.footer.nativeElement.children[0].getBoundingClientRect().top;
        }

        if (isPlatformBrowser(this.platformId)) {
          this.window.scrollTo(0, 0);
        }

        this.isCaseStudy = event.urlAfterRedirects.includes('case-study');
      });

    this.loadFriends();
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

  scrollUp(e) {
    e.preventDefault();
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {

      if (Boolean(this.scrollInterval)) {
        this.window.clearTimeout(this.scrollInterval);
      }

      this.scrollInterval = this.window.setTimeout(() => {
        const scrollY = this.window.pageYOffset || this.document.documentElement.scrollTop;
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
