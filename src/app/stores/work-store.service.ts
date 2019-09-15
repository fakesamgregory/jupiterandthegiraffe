import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkStoreService {
  /* tslint:disable */
  private readonly _work = new BehaviorSubject<any>([]);
  readonly work$ = this._work.asObservable();
  /* tslint:enable */

  get work(): any {
    return this._work.getValue();
  }

  set work(val: any) {
    this._work.next(val);
  }

  addWork(workItem: any) {
    this.work = [
      ...this.work,
      ...workItem
    ];
  }
}
