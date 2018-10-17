import { TestBed, async } from '@angular/core/testing';

import { AosToken, aos } from './aos';
import { AppComponent } from './app.component';
import {StarsComponent} from './stars/stars.component';
import {FooterComponent} from './footer/footer.component';
import {HeroComponent} from './hero/hero.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HeaderComponent} from './header/header.component';
import {PopupComponent} from './popup/popup.component';
import {TrustHtmlPipe} from './trust-html.pipe';
import {LogoComponent} from './logo/logo.component';
import { Angulartics2 } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StarsComponent,
        FooterComponent,
        HeroComponent,
        HeaderComponent,
        PopupComponent,
        TrustHtmlPipe,
        LogoComponent
      ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [Angulartics2GoogleAnalytics, Angulartics2, { provide: AosToken, useValue: aos }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
