import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {empty, Observable} from 'rxjs';
import {WordpressService} from '../../services/wordpress.service';
import {catchError} from 'rxjs/internal/operators';

@Injectable()
export class WorkResolverService implements Resolve<any> {
  constructor(private wordpress: WordpressService, private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.wordpress.getPostType('friends')
      .pipe(catchError(err => {
        console.log(err);
        this.router.navigate(['/not-found']);
        return empty();
      }));
  }
}
