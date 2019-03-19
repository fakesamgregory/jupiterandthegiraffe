import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'ecommerce';
    const DESC =
      'Wordpress or Shopify websites we can build themes on these ecommerce platforms including woocommerce';

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
