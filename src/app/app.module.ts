import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Angulartics2Module} from 'angulartics2';
import {RECAPTCHA_SETTINGS, RecaptchaSettings, RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';

import { AosToken, aos } from './aos';
import { WindowRef } from './services/window.service';

import { AppRoutingModule, routableComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { StarsComponent } from './global/stars/stars.component';
import { HeroComponent } from './global/hero/hero.component';
import { LogoComponent } from './global/logo/logo.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DotsComponent } from './global/dots/dots.component';
import { CookieBannerComponent } from './global/cookie-banner/cookie-banner.component';
import { FooterComponent } from './global/footer/footer.component';
import { CaseStudiesComponent } from './pages/home/case-studies/case-studies.component';
import { WeAreComponent } from './pages/home/we-are/we-are.component';
import { PricingComponent } from './pages/home/pricing/pricing.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { FriendsComponent } from './pages/home/friends/friends.component';
import { QuotesComponent } from './pages/home/quotes/quotes.component';
import { BenefitsComponent } from './pages/home/benefits/benefits.component';
import { GetInTouchComponent } from './global/get-in-touch/get-in-touch.component';
import { CaseStudyComponent } from './pages/home/case-study/case-study.component';
import { VideoLoadDirective } from './directives/video-load.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BackButtonComponent } from './global/back-button/back-button.component';
import { SocialComponent } from './global/social/social.component';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './pages/service/service.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,

    HeaderComponent,
    StarsComponent,
    HeroComponent,
    LogoComponent,
    DotsComponent,
    CookieBannerComponent,
    FooterComponent,
    CaseStudiesComponent,
    CaseStudyComponent,
    WeAreComponent,
    PricingComponent,
    ServicesComponent,
    FriendsComponent,
    QuotesComponent,
    BenefitsComponent,
    GetInTouchComponent,
    BackButtonComponent,
    SocialComponent,

    ParallaxDirective,
    VideoLoadDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    Angulartics2Module.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    WindowRef,
    { provide: AosToken, useValue: aos },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {siteKey: '6LcCT3UUAAAAAMXwUWkwfK5ELzsVOrt63JqAcAM7'} as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
