import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-website-design',
  templateUrl: './website-design.component.html',
  styleUrls: ['./website-design.component.scss']
})
export class WebsiteDesignComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Website Design | Jupiter and the Giraffe';
    const DESC =
      'Every company should have a website. Most users interact with your website long before you even know about it. ' +
      'Your website is such a great lead-generation tool that you need to take it seriously.';

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
