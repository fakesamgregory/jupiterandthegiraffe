import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { RathergoodComponent } from './rathergood/rathergood.component';
import { VelvettrumpetComponent } from './velvettrumpet/velvettrumpet.component';
import { EmdadComponent } from './emdad/emdad.component';
import { WaspplumbingComponent } from './waspplumbing/waspplumbing.component';
import { HarkComponent } from './hark/hark.component';
import { WorkComponent } from './work/work.component';
import { VeratrakComponent } from './veratrak/veratrak.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { WorkResolverService } from './work/work-resolver.service';
import { WorkDetailService } from './work/work-detail/work-detail.service';

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
  { path: 'rathergood', component: RathergoodComponent },
  { path: 'velvet-trumpet', component: VelvettrumpetComponent },
  { path: 'emdad-rashid', component: EmdadComponent },
  { path: 'wasp-plumbing', component: WaspplumbingComponent },
  { path: 'veratrak', component: VeratrakComponent },
  { path: 'hark', component: HarkComponent },
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
  RathergoodComponent,
  VelvettrumpetComponent,
  EmdadComponent,
  WaspplumbingComponent,
  HarkComponent,
  WorkComponent,
  WorkDetailComponent
];
