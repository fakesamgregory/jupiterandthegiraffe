import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  /* tslint:disable */
  private readonly _services = new BehaviorSubject<any>([]);
  readonly services$ = this._services.asObservable();
  /* tslint:enable */

  get services(): any {
    return this._services.getValue();
  }

  set services(val: any) {
    this._services.next(val);
  }

  addServices(services: Array<any>) {
    this.services = services;
  }
}
