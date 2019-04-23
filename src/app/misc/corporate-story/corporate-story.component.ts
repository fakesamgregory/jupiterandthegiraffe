import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';

@Component({
  selector: 'app-corporate-story',
  templateUrl: './corporate-story.component.html',
  styleUrls: ['./corporate-story.component.scss']
})
export class CorporateStoryComponent {

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(WINDOW) private window: Window,
              @Inject(PLATFORM_ID) private platformId: any) {
    const TITLE = 'Corporate Story | Brand Identity | Jupiter and the Giraffe';
    const DESC =
      'Your story is everything so as part of our Brand Identity service we build your story to lay the foundations for ' +
      'you core message and values.';

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
