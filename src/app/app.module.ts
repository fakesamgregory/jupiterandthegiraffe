import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormatDataService} from './format-data.service';
import {Angulartics2Module} from 'angulartics2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from 'ng-recaptcha';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AppRoutingModule, routableComponents} from './app-routing.module';
import {DotsComponent} from './dots/dots.component';
import {StarsComponent} from './stars/stars.component';
import {FooterComponent} from './footer/footer.component';
import {HeroComponent} from './hero/hero.component';
import {HeaderComponent} from './header/header.component';
import {WhatComponent} from './what/what.component';
import {LogoComponent} from './logo/logo.component';
import {PopupComponent} from './popup/popup.component';
import {FriendsComponent} from './home/friends/friends.component';
import {ContactComponent} from './contact/contact.component';
import {SectionComponent} from './section/section.component';
import {TrustHtmlPipe} from './trust-html.pipe';
import {DataService} from './data.service';
import {WorkResolverService} from './work/work-resolver.service';
import {WorkDetailService} from './work/work-detail/work-detail.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {NorthstarComponent} from './northstar/northstar.component';
import {BoombocsComponent} from './boombocs/boombocs.component';

import { AosToken, aos } from './aos';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';
import {EpochBrandWebsiteComponent} from './epoch-brand-website/epoch-brand-website.component';
import {HttpClientModule} from '@angular/common/http';

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
    EpochBrandWebsiteComponent
  ],
  providers: [
    FormatDataService,
    DataService,
    WorkResolverService,
    WorkDetailService,
    { provide: AosToken, useValue: aos },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {siteKey: '6LcCT3UUAAAAAMXwUWkwfK5ELzsVOrt63JqAcAM7'} as RecaptchaSettings,
    }
  ]
})
export class AppModule {
}
