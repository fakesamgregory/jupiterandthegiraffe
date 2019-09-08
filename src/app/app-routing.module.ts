import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WhoComponent } from './pages/who/who.component';
import { WhatComponent } from './pages/what/what.component';
import { WorkComponent } from './pages/work/work.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkResolverService } from './pages/work/work-resolver.service';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ToneOfVoiceComponent } from './misc/tone-of-voice/tone-of-voice.component';
import { TypographyComponent } from './misc/typography/typography.component';
import { LocationComponent } from './pages/location/location.component';
import {IdentityComponent} from './misc/identity/identity.component';
import {AppResolverService} from './pages/person/app-resolver.service';
import {PersonComponent} from './pages/person/person.component';
import {PageResolverService} from './pages/terms-and-conditions/page-resolver.service';
import {CaseStudyComponent} from './pages/case-study/case-study.component';
import {CaseStudyResolverService} from './pages/case-study/case-study-resolver.service';
import {ServiceResolverComponent} from './pages/service/service-resolver.service';
import {ServiceComponent} from './pages/service/service.component';
import {PositioningComponent} from './misc/positioning/positioning.component';
import {CorporateStoryComponent} from './misc/corporate-story/corporate-story.component';
import {WhatResolverService} from './pages/what/what-resolver.service';
import { FunnelComponent } from './pages/funnel/funnel.component';
import { HowToBuildAnEffectiveBrandComponent } from './pages/how-to-build-an-effective-brand/how-to-build-an-effective-brand.component';


const routes: Routes = [
  // Top level pages
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'who-we-are', component: WhoComponent },
  { path: 'what-we-do', component: WhatComponent, resolve: { data: WhatResolverService} },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent, resolve: { data: PageResolverService } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'work', component: WorkComponent, resolve: { work: WorkResolverService } },
  { path: 'people/:name', component: PersonComponent, resolve: { person: AppResolverService } },
  { path: 'free-strategy', component: FunnelComponent },
  { path: 'how-to-launch-an-awesome-tech-brand', component: HowToBuildAnEffectiveBrandComponent },

  // Case studies
  { path: 'case-study', redirectTo: 'work' },
  {
    path: 'case-study/:work',
    component: CaseStudyComponent,
    resolve: {
      work: CaseStudyResolverService
    }
  },
  { path: 'veratrak', redirectTo: 'case-study/veratrak'},
  { path: 'north-star-law', redirectTo: 'case-study/north-star-law'},
  { path: 'boombocs', redirectTo: 'case-study/boombocs'},
  { path: 'epoch-brand-website', redirectTo: 'case-study/epoch-brand-website'},

  // Services
  { path: 'service', redirectTo: 'what-we-do' },
  {
    path: 'service/:service',
    component: ServiceComponent,
    resolve: { data: ServiceResolverComponent }
  },

  {
    path: 'service/brand-strategy',
    children: [
      { path: 'brand-positioning', component: PositioningComponent },

      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'strategy' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'strategy' } },
      { path: 'cardiff', component: LocationComponent, data: { location: 'Cardiff', type: 'strategy' } },
      { path: 'bali', component: LocationComponent, data: { location: 'Bali', type: 'strategy' } }
    ]
  },

  {
    path: 'service/brand-identity',
    children: [
      { path: 'tone-of-voice', component: ToneOfVoiceComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'identity', component: IdentityComponent },
      { path: 'corporate-story', component: CorporateStoryComponent },

      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'identity' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'identity' } },
      { path: 'cardiff', component: LocationComponent, data: { location: 'Cardiff', type: 'identity' } },
      { path: 'bali', component: LocationComponent, data: { location: 'Bali', type: 'identity' } }
    ]
  },

  {
    path: 'service/brand-experience',
    children: [
      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'experience' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'experience' } },
      { path: 'cardiff', component: LocationComponent, data: { location: 'Cardiff', type: 'experience' } },
      { path: 'bali', component: LocationComponent, data: { location: 'Bali', type: 'experience' } }
    ]
  },

  { path: 'brand-strategy', redirectTo: 'service/brand-strategy' },
  { path: 'brand-identity', redirectTo: 'service/brand-identity' },
  { path: 'brand-experience', redirectTo: 'service/brand-experience' },
  { path: 'contact-us', redirectTo: 'contact' },
  
  // Locations
  { path: 'london', component: LocationComponent, data: { location: 'London' } },
  { path: 'sydney', component: LocationComponent, data: { location: 'Sydney' } },
  { path: 'cardiff', component: LocationComponent, data: { location: 'Cardiff' } },
  { path: 'bali', component: LocationComponent, data: { location: 'Bali' } },

  // Not found
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
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
  WorkComponent,
  ContactComponent,
  NotFoundComponent,
  CaseStudyComponent,
  ToneOfVoiceComponent,
  TypographyComponent,
  LocationComponent,
  IdentityComponent,
  PersonComponent,
  PrivacyPolicyComponent,
  ContactComponent,
  WhatComponent,
  ServiceComponent,
  CorporateStoryComponent,
  PositioningComponent,
  FunnelComponent,
  HowToBuildAnEffectiveBrandComponent
];
