import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-toolkit/universal';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-website-development',
  templateUrl: './website-development.component.html',
  styleUrls: ['./website-development.component.scss']
})
export class WebsiteDevelopmentComponent {

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(WINDOW) private window: Window,
              @Inject(PLATFORM_ID) private platformId: any) {
    const TITLE = 'Website Development | Brand Experience | Jupiter and the Giraffe';
    const DESC =
      'Responsive website builds on AWS architecture. Ecommerce, SEO and Wordpress websites. Shopify sites. React, Vue, ' +
      'Angular and static website builder.';

    this.titleService.setTitle(TITLE);

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://jupiterandthegiraffe.com/assets/images/website.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://jupiterandthegiraffe.com/assets/images/website.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:image:alt',
      content: 'Fingers typing on a laptop',
    });

    this.meta.updateTag({
      property: 'og:description',
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
