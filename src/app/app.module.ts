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
import {HeroComponent} from './global/hero/hero.component';
import {HeaderComponent} from './global/header/header.component';
import {LogoComponent} from './global/logo/logo.component';
import {FriendsComponent} from './pages/home/friends/friends.component';
import {SectionComponent} from './global/section/section.component';
import {WorkResolverService} from './pages/work/work-resolver.service';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {GetInTouchComponent} from './global/get-in-touch/get-in-touch.component';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';

import { CookieBannerComponent } from './global/cookie-banner/cookie-banner.component';
import { SocialComponent } from './global/social/social.component';
import { EmailPopupComponent } from './global/email-popup/email-popup.component';
import { DeferLoadDirective } from './defer-load.directive';
import { BackButtonComponent } from './global/back-button/back-button.component';
import { ServiceComponent } from './pages/service/service.component';
import { ParallaxDirective } from './parallax.directive';
import { SignupPopupComponent } from './global/signup-popup/signup-popup.component';

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
    LogoComponent,
    FriendsComponent,
    NotFoundComponent,
    SectionComponent,
    TermsAndConditionsComponent,
    GetInTouchComponent,
    CookieBannerComponent,
    SocialComponent,
    EmailPopupComponent,
    DeferLoadDirective,
    BackButtonComponent,
    ServiceComponent,
    ParallaxDirective,
    SignupPopupComponent,
  ],
  providers: [
    FormatDataService,
    WorkResolverService,
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
