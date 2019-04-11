import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-brand-identity',
  templateUrl: './brand-identity.component.html'
})
export class BrandIdentityComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Brand Identity | Jupiter and the Giraffe';
    const DESC =
      'Identity is where your brand starts to come alive. Brand identity (logo), tone of voice, corporate story, brand messaging';

    this.titleService.setTitle(TITLE);

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
      itemprop: 'name',
      content: TITLE,
    });
  }
}
