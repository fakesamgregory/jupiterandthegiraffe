import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Branding';
    const DESC =
      'Branding, brand strategy, brand identity (logo), tone of voice, corporate, content, marketing strategy, brand messaging';

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
