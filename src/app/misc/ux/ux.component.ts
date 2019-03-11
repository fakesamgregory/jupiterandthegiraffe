import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ux',
  templateUrl: './ux.component.html',
  styleUrls: ['./ux.component.scss']
})
export class UxComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'User Experience (UX)';
    const DESC =
      'User Experience is a core part to website development. UX strips away all of the design and focuses on the user journey\'s. ' +
      'This helps optimise those journey\'s and make your website or app as easy to use as possible.';

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
