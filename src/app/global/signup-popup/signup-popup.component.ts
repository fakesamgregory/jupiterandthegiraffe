import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { DOCUMENT } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss']
})
export class SignupPopupComponent implements OnInit {
  public showDialog = false;
  public showPrompt = false;
  private cookieName = 'emailAcknowledged';
  private cookieTimeInSeconds = 10;

  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Window,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  public closePrompt() {
    this.showPrompt = false;
    this.setCookie(this.cookieName, true, 365);
  }

  public toggleDialog(e) {
    if (e) {
      e.preventDefault();
    }

    this.showDialog = !this.showDialog;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.getCookie(this.cookieName)) {
        this.window.setTimeout(() => {
          this.showPrompt = true;
        }, this.cookieTimeInSeconds * 1000)
      }
    }
  }

  getCookie(name) {
    const v = this.document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return v ? v[2] : null;
  }

  setCookie(name, value, days) {
    const d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    this.document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
  }

}
