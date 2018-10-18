import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  templateUrl: './who.component.html'
})
export class WhoComponent {
  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Who we are - We are Jupiter and the Giraffe';
    const DESC = 'Jupiter and the Giraffe are a not-so-ordinary branding agency. We love all things digital to the moon and back.';

    this.titleService.setTitle( TITLE );

    this.meta.updateTag({
      name: 'description',
      content: DESC
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: TITLE
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DESC
    });
    this.meta.updateTag({
      itemprop: 'name',
      content: TITLE
    });
  }
}
