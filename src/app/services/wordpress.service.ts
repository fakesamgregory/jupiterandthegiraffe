import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  private url = 'https://blog.jupiterandthegiraffe.com/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  public getPageId(id: number) {
    return this.http
      .get(`${this.url}/pages/${id}`);
  }

  public getPostType(type: string, options?: object) {
    let query = options ? '&' : '';
    if (options) {
      Object.keys(options).forEach(item => {
        if (item && options[item]) {
          query += `${item}=${options[item]}&`;
        }
      });
    }
    return this.http
      .get(`${this.url}/${type}?_embed${query.slice(0, -1)}`);
  }

  public getPosts(options?: object) {
    let query = options ? '&' : '';
    if (options) {
      Object.keys(options).forEach(item => {
        if (item && options[item]) {
          query += `${item}=${options[item]}&`;
        }
      });
    }
    return  this.http
      .get(`${this.url}/posts?_embed${query.slice(0, -1)}`);
  }
}
