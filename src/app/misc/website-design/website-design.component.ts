import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-toolkit/universal';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-website-design',
  templateUrl: './website-design.component.html',
  styleUrls: ['./website-design.component.scss']
})
export class WebsiteDesignComponent {

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(WINDOW) private window: Window,
              @Inject(PLATFORM_ID) private platformId: any) {
    const TITLE = 'Website Design | Brand Experience | Jupiter and the Giraffe';
    const DESC =
      'Website design and responsive website design for mobile and desktop web apps. Sketch, Photoshop, Zeplin';

    this.titleService.setTitle(TITLE);

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://jupiterandthegiraffe.com/assets/images/design.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://jupiterandthegiraffe.com/assets/images/design.jpg',
    });
    this.meta.updateTag({
      name: 'twitter:image:alt',
      content: 'Hand drawing on a pen tablet device',
    });

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
