import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-toolkit/universal';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-ux',
  templateUrl: './ux.component.html',
  styleUrls: ['./ux.component.scss']
})
export class UxComponent {

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(WINDOW) private window: Window,
              @Inject(PLATFORM_ID) private platformId: any) {
    const TITLE = 'User Experience | Brand Experience | Jupiter and the Giraffe';
    const DESC =
      'User Experience is a core part to website development. UX strips away all of the brand-experience and focuses ' +
      'on the user journey\'s. This helps optimise those journey\'s and make your website or app as easy to use as possible.';

    this.titleService.setTitle(TITLE);

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
