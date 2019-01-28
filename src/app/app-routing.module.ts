import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WhoComponent } from './pages/who/who.component';
import { WhatComponent } from './pages/what/what.component';
import { VeratrakComponent } from './case-studies/veratrak/veratrak.component';
import { NorthstarComponent } from './case-studies/northstar/northstar.component';
import { WorkComponent } from './pages/work/work.component';
import { WorkDetailComponent } from './pages/work/work-detail/work-detail.component';
import { BoombocsComponent } from './case-studies/boombocs/boombocs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkResolverService } from './pages/work/work-resolver.service';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { EpochBrandWebsiteComponent } from './case-studies/epoch-brand-website/epoch-brand-website.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ToneOfVoiceComponent } from './misc/tone-of-voice/tone-of-voice.component';
import { MessagingComponent } from './misc/messaging/messaging.component';
import { PhotographyComponent } from './misc/photography/photography.component';
import { TypographyComponent } from './misc/typography/typography.component';
import { CmsComponent } from './misc/cms/cms.component';
import { EcommerceComponent } from './misc/ecommerce/ecommerce.component';
import { WordpressComponent } from './misc/wordpress/wordpress.component';
import { ShopifyComponent } from './misc/shopify/shopify.component';
import { VueComponent } from './misc/vue/vue.component';
import { AngularComponent } from './misc/angular/angular.component';
import { ReactComponent } from './misc/react/react.component';
import { LocationComponent } from './misc/location/location.component';
import { DesignComponent } from './pages/design/design.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { BrandingComponent } from './pages/branding/branding.component';
import { UxComponent } from './misc/ux/ux.component';
import {StrategyComponent} from "./pages/strategy/strategy.component";

const routes: Routes = [
  // Top level pages
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'who-we-are', component: WhoComponent },
  { path: 'what-we-do', component: WhatComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'work', component: WorkComponent, resolve: { work: WorkResolverService } },

  // Case studies
  { path: 'case-study', redirectTo: 'work' },
  {
    path: 'case-study',
    children: [
      { path: 'veratrak', component: VeratrakComponent },
      { path: 'north-star-law', component: NorthstarComponent },
      { path: 'boombocs', component: BoombocsComponent },
      { path: 'epoch-brand-website', component: EpochBrandWebsiteComponent }
    ]
  },
  { path: 'veratrak', redirectTo: 'case-study/veratrak'},
  { path: 'north-star-law', redirectTo: 'case-study/north-star-law'},
  { path: 'boombocs', redirectTo: 'case-study/boombocs'},
  { path: 'epoch-brand-website', redirectTo: 'case-study/epoch-brand-website'},

  // Services
  { path: 'service', redirectTo: 'what-we-do' },
  {
    path: 'service',
    children: [
      { path: 'strategy', component: StrategyComponent },
      { path: 'branding', component: BrandingComponent },
      { path: 'design', component: DesignComponent },
      { path: 'web-development', component: WebDevelopmentComponent },
    ]
  },

  // Branding topics, locations
  { path: 'branding', redirectTo: 'service/branding' },
  {
    path: 'branding',
    children: [
      { path: 'tone-of-voice', component: ToneOfVoiceComponent },
      { path: 'messaging', component: MessagingComponent },
      { path: 'photography', component: PhotographyComponent },
      { path: 'typography', component: TypographyComponent },

      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'branding' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'branding' } }
    ]
  },

  // Design topics, locations
  { path: 'design', redirectTo: 'service/design' },
  {
    path: 'design',
    children: [
      { path: 'ux', component: UxComponent },
      { path: 'typography', component: TypographyComponent },

      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'design' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'design' } }
    ]
  },

  // Web Development topics, locations
  { path: 'web-development', redirectTo: 'service/web-development' },
  {
    path: 'web-development',
    children: [
      { path: 'cms', component: CmsComponent },
      { path: 'ecommerce', component: EcommerceComponent },
      { path: 'wordpress', component: WordpressComponent },
      { path: 'shopify', component: ShopifyComponent },
      { path: 'vue', component: VueComponent },
      { path: 'angular', component: AngularComponent },
      { path: 'react', component: ReactComponent },

      { path: 'london', component: LocationComponent, data: { location: 'London', type: 'webdevelopment' } },
      { path: 'sydney', component: LocationComponent, data: { location: 'Sydney', type: 'webdevelopment' } },
    ]
  },

  // Topics
  { path: 'tone-of-voice', component: ToneOfVoiceComponent },
  { path: 'brand-message', component: MessagingComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'cms', component: CmsComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'wordpress', component: WordpressComponent },
  { path: 'shopify', component: ShopifyComponent },
  { path: 'vue', component: VueComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'react', component: ReactComponent },
  { path: 'ux', component: UxComponent },

  // Locations
  { path: 'london', component: LocationComponent, data: { location: 'London' } },
  { path: 'sydney', component: LocationComponent, data: { location: 'Sydney' } },

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
  VeratrakComponent,
  NorthstarComponent,
  WorkComponent,
  WorkDetailComponent,
  ContactComponent,
  NotFoundComponent
];
