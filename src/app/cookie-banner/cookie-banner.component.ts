import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {
  public showCookie = false;
  private _hide = false;

  @Input()
  set hide(hide: boolean) {
    this._hide = hide;
  }

  get hide(): boolean { return this._hide; }

  constructor() { }

  ngOnInit() {
    if (!this.getCookie('cookieAcknowledged')) {
      this.showCookie = true;
    }
  }

  getCookie(name) {
    const v = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return v ? v[2] : null;
  }

  setCookie(name, value, days) {
    const d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
  }

  dismiss() {
    this.setCookie('cookieAcknowledged', true, 365);
    this.showCookie = false;
  }
}
