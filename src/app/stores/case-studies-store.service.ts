import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaseStudiesService {
  /* tslint:disable */
  private readonly _caseStudies = new BehaviorSubject<any>([]);
  readonly caseStudies$ = this._caseStudies.asObservable();
  /* tslint:enable */

  get caseStudies(): any {
    return this._caseStudies.getValue();
  }

  set caseStudies(val: any) {
    this._caseStudies.next(val);
  }
}
