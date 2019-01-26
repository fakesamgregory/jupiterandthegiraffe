import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';

@Injectable()
export class WorkResolverService implements Resolve<any> {
  private _workUrl = 'assets/json/work.json';

  constructor(private dataService: DataService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.dataService.getData(this._workUrl);
  }

}