import {Component, Inject, PLATFORM_ID} from '@angular/core';
import { isDevMode } from '@angular/core';
import {BlogStoreService} from '../../stores/blog-store.service';
import {forkJoin} from 'rxjs';
import {WordpressService} from '../../services/wordpress.service';
import {HttpClient} from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private url = 'https://blog.jupiterandthegiraffe.com/wp-json/wp/v2';
  public error: Object;
  public work: Object;
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
  public services: any;

  constructor(
    private wordpress: WordpressService,
    private http: HttpClient,
    public blogStore: BlogStoreService,
    private meta: Meta,
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: any
  ) {

    const TITLE = '🚀 Jupiter and the Giraffe | Remote branding & design studio for biotech';
    const DESC = 'We do branding and design for biotech products. Because revolutionary technology needs revolutionary branding. Contact us now!';

    this.titleService.setTitle(TITLE);

    this.meta.updateTag({
      property: 'og:description',
      content: DESC,
    });
    this.meta.updateTag({
      name: 'description',
      content: DESC,
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: TITLE,
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DESC,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: TITLE,
    });
    if (isPlatformBrowser(this.platformId)) {
      this.meta.updateTag({
        property: 'og:url',
        content: this.window.location.href,
      });
    }

    this.blogStore.blogs$.subscribe(storedBlogs => {
      if (!storedBlogs.length) {
        this.wordpress.getPosts({'per_page': 1})
          .subscribe((blogs: Array<any>) => {
            blogs.forEach((blog) => {
              try {
                const author = this.http.get(blog._links.author[0].href);
                const category = this.http.get(`${this.url}/categories/${blog.categories[0]}`);
                const get = [author, category];
                const image = blog._embedded['wp:featuredmedia'];

                forkJoin(get)
                  .subscribe(blogData => {
                    const obj = {
                      author: blogData[0],
                      image: image
                        ? blog._embedded['wp:featuredmedia'][0].media_details.sizes.large
                        : {source_url: '/assets/images/blog-feature-default-min.jpg'},
                      blog,
                      date: blog.date.split('T')[0].split('-'),
                      category: blogData[1],
                    };
                    this.blogStore.addBlog(obj);
                  });
              } catch (e) {
                console.log(e);
                this.error = e;
              }
            });
          });
      }
    });

    this.wordpress.getPostType('services')
      .subscribe(data => this.services = data);

    this.wordpress.getPostType('friends')
      .subscribe(data => this.work = data)
  }
}
