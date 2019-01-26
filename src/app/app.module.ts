import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormatDataService} from './format-data.service';
import {Angulartics2Module} from 'angulartics2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AosToken, aos } from './aos';
import {environment} from '../environments/environment';
import { WINDOW_PROVIDERS } from './services/window.service';

import {AppComponent} from './app.component';
import {AppRoutingModule, routableComponents} from './app-routing.module';
import {DotsComponent} from './dots/dots.component';
import {StarsComponent} from './stars/stars.component';
import {FooterComponent} from './footer/footer.component';
import {HeroComponent} from './hero/hero.component';
import {HeaderComponent} from './header/header.component';
import {WhatComponent} from './what/what.component';
import {LogoComponent} from './logo/logo.component';
import {FriendsComponent} from './home/friends/friends.component';
import {ContactComponent} from './contact/contact.component';
import {SectionComponent} from './section/section.component';
import {TrustHtmlPipe} from './trust-html.pipe';
import {DataService} from './data.service';
import {WorkResolverService} from './work/work-resolver.service';
import {WorkDetailService} from './work/work-detail/work-detail.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {NorthstarComponent} from './case-studies/northstar/northstar.component';
import {BoombocsComponent} from './case-studies/boombocs/boombocs.component';
import {GetInTouchComponent} from './get-in-touch/get-in-touch.component';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';
import {EpochBrandWebsiteComponent} from './case-studies/epoch-brand-website/epoch-brand-website.component';

import { SnowComponent } from './snow/snow.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { BrandingComponent } from './what/branding/branding.component';
import { DesignComponent } from './what/design/design.component';
import { ToneOfVoiceComponent } from './misc/tone-of-voice/tone-of-voice.component';
import { MessagingComponent } from './misc/messaging/messaging.component';
import { TypographyComponent } from './misc/typography/typography.component';
import { PhotographyComponent } from './misc/photography/photography.component';
import { CmsComponent } from './misc/cms/cms.component';
import { EcommerceComponent } from './misc/ecommerce/ecommerce.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { ShopifyComponent } from './misc/shopify/shopify.component';
import { VueComponent } from './misc/vue/vue.component';
import { AngularComponent } from './misc/angular/angular.component';
import { ReactComponent } from './misc/react/react.component';
import { UxComponent } from './misc/ux/ux.component';
import { LocationComponent } from './misc/location/location.component';
import { WebDevelopmentComponent } from './what/web-development/web-development.component';
import { StrategyComponent } from './what/strategy/strategy.component';

@NgModule({
  imports: [
    CommonModule,
    NgtUniversalModule,

    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    Angulartics2Module.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
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
    StrategyComponent
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
