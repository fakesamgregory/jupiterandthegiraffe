import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-website-development',
  templateUrl: './website-development.component.html',
  styleUrls: ['./website-development.component.scss']
})
export class WebsiteDevelopmentComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Website Development | Jupiter and the Giraffe';
    const DESC =
      'We\'re confident we can build the site you need, using elegant user experience (UX) and making it accessible to all. ' +
      'We have your users in mind.';

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
