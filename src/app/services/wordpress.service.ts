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

  public getPostId(id: number) {
    return this.http
      .get(`${this.url}/posts/${id}`);
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
      .get<any[]>(`${this.url}/${type}?_embed${query.slice(0, -1)}`);
  }

  public getPostTypeById(type: string, id: number) {
    return this.http
      .get(`${this.url}/${type}/${id}?_embed`);
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
