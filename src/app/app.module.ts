import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormatDataService} from './services/format-data.service';
import {Angulartics2Module} from 'angulartics2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AgmCoreModule } from '@agm/core';

import { AosToken, aos } from './aos';
import {environment} from '../environments/environment';
import { WINDOW_PROVIDERS } from './services/window.service';

import {AppComponent} from './app.component';
import {AppRoutingModule, routableComponents} from './app-routing.module';
import {DotsComponent} from './global/dots/dots.component';
import {StarsComponent} from './global/stars/stars.component';
import {FooterComponent} from './global/footer/footer.component';
import {HeroComponent} from './hero/hero.component';
import {HeaderComponent} from './global/header/header.component';
import {WhatComponent} from './pages/what/what.component';
import {LogoComponent} from './global/logo/logo.component';
import {FriendsComponent} from './pages/home/friends/friends.component';
import {ContactComponent} from './pages/contact/contact.component';
import {SectionComponent} from './global/section/section.component';
import {TrustHtmlPipe} from './trust-html.pipe';
import {DataService} from './data.service';
import {WorkResolverService} from './pages/work/work-resolver.service';
import {WorkDetailService} from './pages/work/work-detail/work-detail.service';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NorthstarComponent} from './case-studies/northstar/northstar.component';
import {BoombocsComponent} from './case-studies/boombocs/boombocs.component';
import {GetInTouchComponent} from './global/get-in-touch/get-in-touch.component';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';
import {EpochBrandWebsiteComponent} from './case-studies/epoch-brand-website/epoch-brand-website.component';

import { SnowComponent } from './global/snow/snow.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { CookieBannerComponent } from './global/cookie-banner/cookie-banner.component';
import { BrandingComponent } from './pages/branding/branding.component';
import { DesignComponent } from './pages/design/design.component';
import { ToneOfVoiceComponent } from './misc/tone-of-voice/tone-of-voice.component';
import { MessagingComponent } from './misc/messaging/messaging.component';
import { TypographyComponent } from './misc/typography/typography.component';
import { PhotographyComponent } from './misc/photography/photography.component';
import { CmsComponent } from './misc/cms/cms.component';
import { EcommerceComponent } from './misc/ecommerce/ecommerce.component';
import { WordpressComponent } from './misc/wordpress/wordpress.component';
import { ShopifyComponent } from './misc/shopify/shopify.component';
import { VueComponent } from './misc/vue/vue.component';
import { AngularComponent } from './misc/angular/angular.component';
import { ReactComponent } from './misc/react/react.component';
import { UxComponent } from './misc/ux/ux.component';
import { LocationComponent } from './misc/location/location.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { StrategyComponent } from './pages/strategy/strategy.component';
import { IdentityComponent } from './misc/identity/identity.component';
import { AnimationsComponent } from './misc/animations/animations.component';
import { AwsComponent } from './misc/aws/aws.component';
import { SocialComponent } from './global/social/social.component';
import { EmailPopupComponent } from './global/email-popup/email-popup.component';
import { DeferLoadDirective } from './defer-load.directive';
import { BackButtonComponent } from './global/back-button/back-button.component';
import {PersonComponent} from './pages/person/person.component';
import {CaseStudyComponent} from './pages/case-study/case-study.component';

@NgModule({
  imports: [
    CommonModule,
    NgtUniversalModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey,
    }),

    AppRoutingModule,

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
    WhatComponent,
    LogoComponent,
    FriendsComponent,
    TrustHtmlPipe,
    NotFoundComponent,
    NorthstarComponent,
    ContactComponent,
    SectionComponent,
    BoombocsComponent,
    TermsAndConditionsComponent,
    EpochBrandWebsiteComponent,
    GetInTouchComponent,
    SnowComponent,
    PrivacyPolicyComponent,
    CookieBannerComponent,
    BrandingComponent,
    DesignComponent,
    ToneOfVoiceComponent,
    MessagingComponent,
    TypographyComponent,
    PhotographyComponent,
    CmsComponent,
    EcommerceComponent,
    WordpressComponent,
    ShopifyComponent,
    VueComponent,
    AngularComponent,
    ReactComponent,
    UxComponent,
    LocationComponent,
    WebDevelopmentComponent,
    StrategyComponent,
    IdentityComponent,
    AnimationsComponent,
    AwsComponent,
    PersonComponent,
    SocialComponent,
    EmailPopupComponent,
    DeferLoadDirective,
    BackButtonComponent,
    CaseStudyComponent
  ],
  providers: [
    FormatDataService,
    DataService,
    WorkResolverService,
    WorkDetailService,
    WINDOW_PROVIDERS,
    { provide: AosToken, useValue: aos },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {siteKey: '6LcCT3UUAAAAAMXwUWkwfK5ELzsVOrt63JqAcAM7'} as RecaptchaSettings,
    }
  ]
})
export class AppModule {
}
