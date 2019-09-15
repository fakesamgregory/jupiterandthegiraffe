import {Component, Inject, Input, OnInit} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {
  public showCookie = false;
  private hideBanner = false;

  @Input()
  set hide(hide: boolean) {
    this.hideBanner = hide;
  }

  get hide(): boolean { 
    return this.hideBanner; 
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.getCookie('cookieAcknowledged')) {
        this.showCookie = true;
      }
    }
  }

  public getCookie(name: string): unknown {
    const v = this.document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return v ? v[2] : null;
  }

  public setCookie(name: string, value: boolean, days: number): void {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    this.document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
  }

  public dismiss(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setCookie('cookieAcknowledged', true, 365);
      this.showCookie = false;
    }
  }
}
