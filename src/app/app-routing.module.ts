import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { EmdadComponent } from './emdad/emdad.component';
import { WaspplumbingComponent } from './waspplumbing/waspplumbing.component';
import { VeratrakComponent } from './veratrak/veratrak.component';
import { NorthstarComponent } from './northstar/northstar.component';
import { WorkComponent } from './work/work.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { BoombocsComponent } from './boombocs/boombocs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { WorkResolverService } from './work/work-resolver.service';
import { WorkDetailService } from './work/work-detail/work-detail.service';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { EpochBrandWebsiteComponent } from './epoch-brand-website/epoch-brand-website.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'who-we-are', component: WhoComponent },
  { path: 'what-we-do', component: WhatComponent },
  {
    path: 'work',
    component: WorkComponent,
    resolve: { work: WorkResolverService },
    children: [
      { path: ':page', children: [
          {
            path: '',
            component: WorkDetailComponent,
            resolve: {
              page: WorkDetailService
            }
          }
        ]
      }
    ]
  },
  { path: '3dux', component: EmdadComponent },
  { path: 'wasp-plumbing', component: WaspplumbingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'veratrak', component: VeratrakComponent },
  { path: 'north-star-law', component: NorthstarComponent },
  { path: 'boombocs', component: BoombocsComponent },
  { path: 'epoch-brand-website', component: EpochBrandWebsiteComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  HomeComponent,
  WhoComponent,
  WhatComponent,
  EmdadComponent,
  WaspplumbingComponent,
  VeratrakComponent,
  NorthstarComponent,
  WorkComponent,
  WorkDetailComponent,
  ContactComponent,
  NotFoundComponent
];
