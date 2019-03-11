import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Content management system (CMS)';
    const DESC =
      'Short for \'Content Managment System\', CMS is a piece of software that manages the creation and modification ' +
      'of digital content and allows for the separation of content and presentation in a web application. CMS\' ' +
      'allow for many users with varying permissions to manage this content.';

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
