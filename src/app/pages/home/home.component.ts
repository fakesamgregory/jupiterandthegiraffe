import {Component, Inject, OnInit} from '@angular/core';
import { forkJoin } from 'rxjs';
import { isDevMode } from '@angular/core';
import {WordpressService} from '../../services/wordpress.service';
import {HttpClient} from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public blogs: Array<object> = [];
  private url = 'https://blog.jupiterandthegiraffe.com/wp-json/wp/v2';
  public error: Object;
  public developmentMode = isDevMode();
  public showMyElement = false;
  public styles = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#f5f5f5'
        }
      ]
    },
    {
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#f5f5f5'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#333333'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#eeeeee'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#333333'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#e5e5e5'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#333333'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#333333'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#dadada'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#333333'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#333333'
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#e5e5e5'
        }
      ]
    },
    {
      'featureType': 'transit.station',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#eeeeee'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#c9c9c9'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    }
  ];

  constructor(
    private wordpress: WordpressService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const sequence = this.wordpress.getPosts({'per_page': 2})
      .subscribe((blogs: Array<any>) => {
        blogs.forEach((blog) => {
          try {
            const author = this.http.get(blog._links.author[0].href);
            const category = this.http.get(`${this.url}/categories/${blog.categories[0]}`);
            const get = [author, category];
            const image = blog._embedded['wp:featuredmedia'];

            forkJoin(get)
              .subscribe(data => {
                const obj = {
                  author: data[0],
                  image: image
                    ? blog._embedded['wp:featuredmedia'][0].media_details.sizes.large
                    : {source_url: '/assets/images/blog-feature-default-min.jpg'},
                  blog,
                  date: blog.date.split('T')[0].split('-'),
                  category: data[1],
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
