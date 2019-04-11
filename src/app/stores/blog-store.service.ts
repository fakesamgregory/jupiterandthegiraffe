import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogStoreService {
  private readonly _blogs = new BehaviorSubject<any>([]);
  readonly blogs$ = this._blogs.asObservable();

  get blogs(): any {
    return this._blogs.getValue();
  }

  set blogs(val: any) {
    this._blogs.next(val);
  }

  addBlog(blog: any) {
    this.blogs = [
      ...this.blogs,
      ...blog
    ];
  }
}
