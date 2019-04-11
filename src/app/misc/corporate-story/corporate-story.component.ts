import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-corporate-story',
  templateUrl: './corporate-story.component.html',
  styleUrls: ['./corporate-story.component.scss']
})
export class CorporateStoryComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Corporate Story | Jupiter and the Giraffe';
    const DESC =
      'Your story is everything so as part of our Brand Identity service we build your story to lay the foundations for ' +
      'you core message and values.';

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
