import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http
      .get(url)
      .pipe(map((response: Object) => response));
  }
}
