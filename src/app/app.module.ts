import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormatDataService } from './format-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { DotsComponent } from './dots/dots.component';
import { StarsComponent } from './stars/stars.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { WhatComponent } from './what/what.component';
import { LogoComponent } from './logo/logo.component';
import { PopupComponent } from './popup/popup.component';
import { FriendsComponent } from './home/friends/friends.component';
import { TechComponent } from './home/tech/tech.component';
import { TrustHtmlPipe } from './trust-html.pipe';
import { DataService } from './data.service';
import { WorkResolverService } from './work/work-resolver.service';
import { WorkDetailService } from './work/work-detail/work-detail.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
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
    PopupComponent,
    FriendsComponent,
    TechComponent,
    TrustHtmlPipe,
    NotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    FormatDataService,
    DataService,
    WorkResolverService,
    WorkDetailService
  ]
})
export class AppModule { }
