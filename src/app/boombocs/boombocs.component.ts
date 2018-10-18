import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-boombocs',
  templateUrl: './boombocs.component.html',
  styleUrls: ['./boombocs.component.scss']
})
export class BoombocsComponent {
  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Boombocs - Website development';
    const DESC = 'BoomBocs produce high-end, quality speaker systems. A colourful, fun yet powerful and professional sounding device, ' +
      'which is looking to enter high-end retail stores this year. BoomBocs came to us looking to revamp their website and give it its own, distinct identity. ' +
      'We welcomed the challenge.';

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
