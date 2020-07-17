import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhoComponent } from './pages/who/who.component';
import { WhatComponent } from './pages/what/what.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { LocationComponent } from './pages/location/location.component';
import { PersonComponent } from './pages/person/person.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { FunnelComponent } from './pages/funnel/funnel.component';
import { HowToBuildAnEffectiveBrandComponent } from './pages/how-to-build-an-effective-brand/how-to-build-an-effective-brand.component';
import { MVPPackageComponent } from './pages/mvp-package/mvp-package.component';

import { WhoResolverService } from './pages/who/who-resolver.service';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PageResolverService } from './pages/terms-and-conditions/page-resolver.service';
import { ServiceComponent } from './pages/service/service.component';
import { ServiceResolverComponent } from './pages/service/service-resolver.service';
import { CaseStudyResolverService } from './pages/case-study/case-study-resolver.service';
import { AppResolverService } from './pages/person/app-resolver.service';
import { ServicesService } from './stores/services.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'who-we-are', component: WhoComponent,  resolve: { data: WhoResolverService} },
  { path: 'what-we-do', component: WhatComponent },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
    resolve: { data: PageResolverService},
    data: { pageId: 144 }
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'people/:name', component: PersonComponent, resolve: { person: AppResolverService } },
  { path: 'free-strategy', component: FunnelComponent },
  { path: 'how-to-launch-an-awesome-tech-brand', component: HowToBuildAnEffectiveBrandComponent },
  {
    path: 'mvp-package',
    component: MVPPackageComponent,
    resolve: { data: PageResolverService },
    data: { pageId: 953 }
  },
  {
    path: 'website-package',
    component: MVPPackageComponent,
    resolve: { data: PageResolverService },
    data: { pageId: 985 }
  },

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
    path: 'service/web-app-design',
    children: [
      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'web app design' } },
    ]
  },

  {
    path: 'service/web-app-development',
    children: [
      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'web app development' } },
    ]
  },

  {
    path: 'service/web-app-strategy',
    children: [
      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'web app strategy' } },
    ]
  },

  { path: 'design', redirectTo: 'service/web-app-design' },
  { path: 'development', redirectTo: 'service/web-app-development' },
  { path: 'strategy', redirectTo: 'service/web-app-strategy' },
  { path: 'contact-us', redirectTo: 'contact' },

  // Locations
  { path: 'london', component: LocationComponent, data: { location: 'London' } },

  // Not found
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  HomeComponent,
  WhoComponent,
  NotFoundComponent,
  CaseStudyComponent,
  LocationComponent,
  PersonComponent,
  PrivacyPolicyComponent,
  ContactComponent,
  WhatComponent,
  ServicesComponent,
  FunnelComponent,
  HowToBuildAnEffectiveBrandComponent,
  MVPPackageComponent,
  TermsAndConditionsComponent,
  ServiceComponent
];
