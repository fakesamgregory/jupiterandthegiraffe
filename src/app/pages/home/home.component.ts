import {Component, Inject, PLATFORM_ID, Optional, OnInit} from '@angular/core';
import {WordpressService} from '../../services/wordpress.service';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public error: any;
  public work: any;
  public content: any;
  public showMyElement = false;
  public styles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5'
        }
      ]
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161'
        }
      ]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5'
        }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#333333'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#333333'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#333333'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#333333'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#333333'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#333333'
        }
      ]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5'
        }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e'
        }
      ]
    }
  ];
  public services: any;
  public benefits: Array<any>;
  public quotes: Array<any>;

  constructor(
    private wordpress: WordpressService,
    private meta: Meta,
    private titleService: Title,
    @Optional() @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.benefits = [
      {
        title: 'Lead With Strategy',
        description: 'You need a partner who understandings your SaaS product and builds with business goals in mind.',
        img: '/assets/images/earth.svg'
      },
      {
        title: 'We\'re With You Every Step Of The Way',
        description: 'Once we launch your SaaS app we don\'t just leave you in the lurch. ' +
          'With monthly maintainance and user data research reports, we\'ll keep your app running smooth.',
        img: '/assets/images/moon.svg'
      },
      {
        title: 'Save Money. Save Time',
        description: 'Have confidence that because we have strategy and longevity in mind we make decisions ' +
          'to the best of our ability early on so your SaaS app can scale beyond MVP.',
        img: '/assets/images/solar-system.svg'
      },
    ];
  }

  ngOnInit() {
    const TITLE = 'Design and Build SaaS Products for Future-Thinking Tech';
    const DESC = 'Design and Development powerhouse for SaaS products and web apps for tech that changes the world.';

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

    this.wordpress.getPageId(293)
      .subscribe(data => this.content = data);

    this.wordpress.getPostType('services')
      .subscribe(data => {
        this.services = data;
      });

    this.wordpress.getPostType('friends')
      .subscribe(data => this.work = data);

    this.wordpress.getPostType('quotes')
      .subscribe(data => this.quotes = data);
  }
}
