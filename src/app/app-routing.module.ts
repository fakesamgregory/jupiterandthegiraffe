import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WhoComponent } from './pages/who/who.component';
import { WhatComponent } from './pages/what/what.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LocationComponent } from './pages/location/location.component';
import {AppResolverService} from './pages/person/app-resolver.service';
import {PersonComponent} from './pages/person/person.component';
import {PageResolverService} from './pages/terms-and-conditions/page-resolver.service';
import {CaseStudyComponent} from './pages/case-study/case-study.component';
import {CaseStudyResolverService} from './pages/case-study/case-study-resolver.service';
import {ServiceResolverComponent} from './pages/service/service-resolver.service';
import {ServiceComponent} from './pages/service/service.component';
import { FunnelComponent } from './pages/funnel/funnel.component';
import { MVPPackageComponent } from './pages/mvp-package/mvp-package.component';
import { HowToBuildAnEffectiveBrandComponent } from './pages/how-to-build-an-effective-brand/how-to-build-an-effective-brand.component';
import { WhoResolverService } from './pages/who/who-resolver.service';

const routes: Routes = [
  // Top level pages
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'who-we-are', component: WhoComponent,  resolve: { data: WhoResolverService} },
  { path: 'what-we-do', component: WhatComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent, resolve: { data: PageResolverService } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'people/:name', component: PersonComponent, resolve: { person: AppResolverService } },
  { path: 'free-strategy', component: FunnelComponent },
  { path: 'how-to-launch-an-awesome-tech-brand', component: HowToBuildAnEffectiveBrandComponent },
  { path: 'mvp-package', component: MVPPackageComponent },

  // Case studies
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
  { path: 'case-study', redirectTo: '/' },

  // Services
  { path: 'service', redirectTo: 'what-we-do' },
  {
    path: 'service/:service',
    component: ServiceComponent,
    resolve: { data: ServiceResolverComponent }
  },

  {
    path: 'service/design',
    children: [
      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'design' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'design' } },
      { path: 'cardiff', component: LocationComponent, data: { location: 'Cardiff', type: 'design' } }
    ]
  },

  {
    path: 'service/development',
    children: [
      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'development' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'development' } },
      { path: 'cardiff', component: LocationComponent, data: { location: 'Cardiff', type: 'development' } }
    ]
  },

  {
    path: 'service/strategy',
    children: [
      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'strategy' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'strategy' } },
      { path: 'cardiff', component: LocationComponent, data: { location: 'Cardiff', type: 'strategy' } }
    ]
  },

  { path: 'design', redirectTo: 'service/design' },
  { path: 'development', redirectTo: 'service/development' },
  { path: 'strategy', redirectTo: 'service/strategy' },
  { path: 'contact-us', redirectTo: 'contact' },

  // Locations
  { path: 'london', component: LocationComponent, data: { location: 'London' } },
  { path: 'sydney', component: LocationComponent, data: { location: 'Sydney' } },
  { path: 'cardiff', component: LocationComponent, data: { location: 'Cardiff' } },
  { path: 'bali', component: LocationComponent, data: { location: 'Bali' } },

  // Not found
  { path: '404', component: NotFoundComponent },
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
  ContactComponent,
  NotFoundComponent,
  CaseStudyComponent,
  LocationComponent,
  PersonComponent,
  PrivacyPolicyComponent,
  ContactComponent,
  WhatComponent,
  ServiceComponent,
  FunnelComponent,
  HowToBuildAnEffectiveBrandComponent,
  MVPPackageComponent,
];
