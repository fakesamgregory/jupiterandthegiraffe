import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  /* tslint:disable */
  private readonly _homepage = new BehaviorSubject<any>([]);
  readonly homepage$ = this._homepage.asObservable();
  /* tslint:enable */

  get homepage(): any {
    return this._homepage.getValue();
  }

  set homepage(val: any) {
    this._homepage.next(val);
  }
}
