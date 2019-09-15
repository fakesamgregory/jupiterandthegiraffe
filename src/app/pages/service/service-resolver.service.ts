import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {WordpressService} from '../../services/wordpress.service';
import {Observable, EMPTY} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceResolverComponent implements Resolve<any> {

  constructor(private wordress: WordpressService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    return this.wordress
      .getPostType('services', { slug: route.params.service })
      .pipe(catchError(err => {
        console.log(err);
        this.router.navigate(['/not-found']);
        return EMPTY;
      }));
  }
}
