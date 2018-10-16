import { Component, HostListener, Inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { AosToken } from './aos';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader = false;
  isHome = false;
  isKeyboardUser = false;
  hasBeenHome = false;

  constructor(
    router: Router,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    @Inject(AosToken) aos
  ) {
    aos.init({
      duration: 800,
      once: true
    });

    angulartics2GoogleAnalytics.startTracking();

    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.isHome = (event.url === '/' && !this.hasBeenHome);

        if (event.url === '/') {
          this.hasBeenHome = true;
        }

        window.scrollTo(0, 0);
      });
  }

  scrollUp(e) {
    e.preventDefault();
    window.scroll(0, 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showHeader = (window.scrollY > 400);
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
