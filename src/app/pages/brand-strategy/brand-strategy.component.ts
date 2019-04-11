import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-brand-strategy',
  templateUrl: './brand-strategy.component.html'
})
export class BrandStrategyComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Brand Strategy | Jupiter and the Girafe';
    const DESC =
      'Delve deeper than you thought was possible, we help set the stage for a brand that is set for success.';

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
