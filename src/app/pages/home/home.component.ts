import {Component, Inject, PLATFORM_ID, Optional, OnInit} from '@angular/core';
import {WordpressService} from '../../services/wordpress.service';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { HomepageService } from 'src/app/stores/homepage-store.service';
import { ServicesService } from 'src/app/stores/services.service';
import { CaseStudiesService } from 'src/app/stores/case-studies-store.service';
import { WindowRef } from 'src/app/services/window.service';

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
  public services: any;
  public benefits: Array<any>;
  public quotes: Array<any>;

  constructor(
    private wordpress: WordpressService,
    private meta: Meta,
    private titleService: Title,
    private winRef: WindowRef,
    @Inject(PLATFORM_ID) private platformId: any,
    public homepageService: HomepageService,
    public servicesService: ServicesService,
    public caseStudiesService: CaseStudiesService,
  ) { }

  ngOnInit() {
    const TITLE = 'Web Apps & SaaS Products - Design, Develop, Launch';
    const DESC = 'We help you design and build your next product innovation. Over 10 years ' +
      'building web apps with business strategy in mind.';

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
        content: this.winRef.nativeWindow.nativeWindow.location.href || '',
      });
    }

    this.wordpress.getPostType('quotes')
      .subscribe(data => this.quotes = data);
  }
}
