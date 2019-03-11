import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.scss']
})
export class ShopifyComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Shopify';
    const DESC =
      'Shopify is a powerful eCommerce platform and we have experience building themes for. ' +
      'Whether you\'re just starting out or already have a store, we can help you sell more.';

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
