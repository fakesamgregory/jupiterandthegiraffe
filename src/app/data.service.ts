import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http
      .get(url)
      .map((response: Object) => response);
  }
}
