import { TestBed, async } from '@angular/core/testing';
import {WINDOW} from '@ng-toolkit/universal';
import {ReactiveFormsModule} from '@angular/forms';
import { AosToken, aos } from './aos';

import { AppComponent } from './app.component';
import {HeroComponent} from './hero/hero.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TrustHtmlPipe} from './trust-html.pipe';
import {HttpClientModule} from '@angular/common/http';
import { Angulartics2Facebook } from 'angulartics2/facebook';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import {StarsComponent} from './global/stars/stars.component';
import {FooterComponent} from './global/footer/footer.component';
import {HeaderComponent} from './global/header/header.component';
import {LogoComponent} from './global/logo/logo.component';
import {CookieBannerComponent} from './global/cookie-banner/cookie-banner.component';
import {EmailPopupComponent} from './global/email-popup/email-popup.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StarsComponent,
        FooterComponent,
        HeroComponent,
        HeaderComponent,
        TrustHtmlPipe,
        LogoComponent,
        CookieBannerComponent,
        EmailPopupComponent,
      ],
      imports: [ RouterTestingModule, HttpClientModule, ReactiveFormsModule],
      providers: [
        {provide: WINDOW},
        {provide: Angulartics2GoogleTagManager, useValue: {
          startTracking: () => true,
        }},
        { provide: AosToken, useValue: aos },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
