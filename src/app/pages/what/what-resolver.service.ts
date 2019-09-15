import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {WordpressService} from '../../services/wordpress.service';
import {Observable, forkJoin, EMPTY} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class WhatResolverService implements Resolve<any> {

  constructor(private wordpress: WordpressService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    return forkJoin([
        this.wordpress.getPostType('services', { slug: route.params.service }),
        this.wordpress.getPageId(373)
      ])
      .pipe(catchError(err => {
        console.log(err);
        this.router.navigate(['/not-found']);
        return EMPTY;
      }));
  }
}
