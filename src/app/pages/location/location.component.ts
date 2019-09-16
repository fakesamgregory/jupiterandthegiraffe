import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {
  public location: string;
  public type: any;

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId,
    @Inject(WINDOW) private window: Window,
  ) { }

  ngOnInit() {
    this.location = this.route.snapshot.data.location;
    this.type = this.route.snapshot.data.type;

    const TITLE = `Jupiter and the Giraffe | ${this.location} | Brand Strategy, Brand Identity, Brand Experience`;
    const DESC =
      `We bring all our services to ${this.location}, be it web development, branding or design.
       As always we will start with a strategy workshop and build out your needs and solutions to your problems.`;

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
  }
}
