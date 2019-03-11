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
      'Investing in your brand will get results by building confidence in your customers with an easily recognisable ' +
      'and relatable aesthetic. We want to give you something that will scale and grow along with your company\'s ' +
      'ambitions and ultimate success.';

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
