import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';

@Component({
  selector: 'app-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.scss']
})
export class PositioningComponent {

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(WINDOW) private window: Window,
              @Inject(PLATFORM_ID) private platformId: any) {
    const TITLE = 'Positioning | Brand Strategy | Jupiter and the Giraffe';
    const DESC =
      'We help establish what position in the market you exist in. As the old saying goes, if you try and speak to everyone, ' +
      'you\'re speaking to no one.';

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
