import {isPlatformBrowser, DOCUMENT} from '@angular/common';
import {environment} from '../environments/environment';
import {WINDOW} from '@ng-toolkit/universal';
import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {AosToken} from './aos';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeader = false;
  isHome = false;
  isKeyboardUser = false;
  hasBeenHome = false;

  public ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      const bases = this.document.getElementsByTagName('base');

      if (bases.length > 0) {
        bases[0].setAttribute('href', environment.baseHref);
      }
    }
  }


  constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any, @Inject(WINDOW) private window: Window,
              router: Router,
              angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              @Inject(AosToken) aos) {

    if (isPlatformBrowser(this.platformId)) {
      aos.init({
        duration: 800,
        once: true
      });
    }

    angulartics2GoogleAnalytics.startTracking();

    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.isHome = (event.url === '/' && !this.hasBeenHome);

        if (event.url === '/') {
          this.hasBeenHome = true;
        }

        if (isPlatformBrowser(this.platformId)) {
          this.window.scrollTo(0, 0);
        }
      });
  }

  scrollUp(e) {
    e.preventDefault();
    this.window.scroll(0, 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showHeader = (this.window.scrollY > 400);
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
