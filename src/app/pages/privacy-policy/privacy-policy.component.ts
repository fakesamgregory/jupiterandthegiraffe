import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html'
})
export class PrivacyPolicyComponent {

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(PLATFORM_ID) private platformId: any,
              @Inject(WINDOW) private window: Window) {
    const TITLE = 'Privacy Policy | Jupiter and the Giraffe';
    const DESC =
      'We only collect information about you if we have a reason to do so–for example, to provide our Services, ' +
      'to communicate with you, or to make our Services better.';

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
