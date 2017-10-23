import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../data.service';


@Injectable()
export class WorkDetailService implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.dataService.getData('/assets/json/work.json');
  }

}
