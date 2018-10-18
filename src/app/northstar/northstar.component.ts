import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-northstar',
  templateUrl: './northstar.component.html',
  styleUrls: ['./northstar.component.scss']
})
export class NorthstarComponent {
  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'North Star Law - Website development';
    const DESC = 'North Star Law are a law-firm based in South Kensington, London who specialise in property law, ' +
      'private client/tax and immigration law.';

    this.titleService.setTitle( TITLE );

    this.meta.updateTag({
      name: 'description',
      content: DESC
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: TITLE
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DESC
    });
    this.meta.updateTag({
      itemprop: 'name',
      content: TITLE
    });
  }
}
