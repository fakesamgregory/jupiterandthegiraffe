import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss'],
})
export class WebDevelopmentComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Web Development';
    const DESC =
      'We can build Wordpress websites, ecommerce and Shopify sites as well as singe-page applications in React, Vue and Angular';

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
