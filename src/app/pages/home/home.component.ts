import {Component, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FriendsComponent } from './friends/friends.component';
import { WINDOW } from '../../services/window.service';
import { map } from 'rxjs/operators';
import {from, Observable, forkJoin} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public blogs: Array<object> = [];
  private url = 'https://blog.jupiterandthegiraffe.com/wp-json/wp/v2';
  public error: Object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const sequence = this.http
      .get(`${this.url}/posts?per_page=2`)
      .subscribe((blogs: Array<any>) => {
        blogs.forEach((blog) => {

          try {
            const author = this.http.get(blog._links.author[0].href);
            const image = this.http.get(blog._links['wp:featuredmedia'][0].href);
            const category = this.http.get(`${this.url}/categories/${blog.categories[0]}`);

            forkJoin(author, image, category)
              .subscribe(data => {
                const obj = {
                  author: data[0],
                  image: data[1],
                  blog,
                  date: blog.date.split('T')[0].split('-'),
                  category: data[2]
                };
                this.blogs.push(obj);
              });
          } catch (e) {
            console.log(e);
            this.error = e;
          }
        });
      });
  }
}
