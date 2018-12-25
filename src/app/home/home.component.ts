import {Component, HostListener, Inject, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FriendsComponent } from './friends/friends.component';
import { WINDOW } from '../services/window.service';
import { map } from 'rxjs/operators';
import {from, Observable, forkJoin} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  public navIsFixed = false;
  public inputPos: number;
  public blogs: Array<object> = [];
  // public error: object;
  @ViewChild('myname') input;
  private url = 'http://blog.jupiterandthegiraffe.com/wp-json/wp/v2';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private http: HttpClient) { }

  ngOnInit() {
    const sequence = this.http
      .get(`${this.url}/posts?per_page=2`)
      .subscribe((blogs: Array<any>) => {
        blogs.forEach((blog) => {
          const author = this.http.get(blog._links.author[0].href);
          const image = this.http.get(blog._links['wp:featuredmedia'][0].href);

          forkJoin(author, image)
            .subscribe(data => {
              const obj = {
                author: data[0],
                image: data[1],
                blog,
                date: blog.date.split('T')[0].split('-'),
              };

              console.log(obj);

              this.blogs.push(obj);
            });
        });
        // return ;
      })

    //   .pipe(mergeMap(blog => { console.log(blog); return ; }))
    //   .pipe(mergeMap(blog => )));
    // console.log(sequence);

  }

  ngAfterViewInit() {
    this.inputPos = this.input.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.navIsFixed = number > this.inputPos ? true : false;
  }
}
