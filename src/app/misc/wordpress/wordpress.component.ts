import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss']
})
export class WordpressComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Wordpress';
    const DESC =
      'Extensive experience in Wordpress websites. Building a CMS on this platform is a breeze';

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
