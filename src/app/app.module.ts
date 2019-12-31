import {CommonModule} from '@angular/common';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {Angulartics2Module} from 'angulartics2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule, RecaptchaFormsModule} from 'ng-recaptcha';
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AosToken, aos } from './aos';
import {environment} from '../environments/environment';
import { WINDOW_PROVIDERS } from './services/window.service';

import {AppComponent} from './app.component';
import {AppRoutingModule, routableComponents} from './app-routing.module';
import {DotsComponent} from './global/dots/dots.component';
import {StarsComponent} from './global/stars/stars.component';
import {FooterComponent} from './global/footer/footer.component';
import {HeroComponent} from './global/hero/hero.component';
import {HeaderComponent} from './global/header/header.component';
import {LogoComponent} from './global/logo/logo.component';
import {FriendsComponent} from './pages/home/friends/friends.component';
import { CaseStudiesComponent } from './pages/home/case-studies/case-studies.component';
import { CaseStudyComponent } from './pages/home/case-study/case-study.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { BenefitsComponent } from './pages/home/benefits/benefits.component';
import { QuotesComponent } from './pages/home/quotes/quotes.component';
import { WeAreComponent } from './pages/home/we-are/we-are.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {GetInTouchComponent} from './global/get-in-touch/get-in-touch.component';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';
import { CookieBannerComponent } from './global/cookie-banner/cookie-banner.component';
import { SocialComponent } from './global/social/social.component';
import { EmailPopupComponent } from './global/email-popup/email-popup.component';
import { DeferLoadDirective } from './directives/defer-load.directive';
import { BackButtonComponent } from './global/back-button/back-button.component';
import { ServiceComponent } from './pages/service/service.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { ClimateStrikeComponent } from './global/climate-strike/climate-strike.component';
import { PricingComponent } from './pages/home/pricing/pricing.component';
import { VideoLoadDirective } from './directives/video-load.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,

    AppRoutingModule,
    NgtUniversalModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    Angulartics2Module.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientJsonpModule,
  ],
  declarations: [
    AppComponent,
    routableComponents,
    DotsComponent,
    StarsComponent,
    FooterComponent,
    HeroComponent,
    HeaderComponent,
    LogoComponent,
    FriendsComponent,
    NotFoundComponent,
    TermsAndConditionsComponent,
    GetInTouchComponent,
    CookieBannerComponent,
    SocialComponent,
    EmailPopupComponent,
    DeferLoadDirective,
    BackButtonComponent,
    ServiceComponent,
    ParallaxDirective,
    ClimateStrikeComponent,
    VideoLoadDirective,
    CaseStudiesComponent,
    CaseStudyComponent,
    ServicesComponent,
    BenefitsComponent,
    QuotesComponent,
    WeAreComponent,
    PricingComponent,
  ],
  providers: [
    WINDOW_PROVIDERS,
    { provide: AosToken, useValue: aos },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {siteKey: '6LcCT3UUAAAAAMXwUWkwfK5ELzsVOrt63JqAcAM7'} as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
