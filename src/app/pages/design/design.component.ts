import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Design';
    const DESC =
      'Extending from your brand, we take every aspect of who your users are and we\'ll design you something that far ' +
      'exceeds what they expect';

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
