import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-brand-experience',
  templateUrl: './brand-experience.component.html'
})
export class BrandExperienceComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Brand Experience | Jupiter and the Giraffe';
    const DESC =
      'Your brand experienced. Website brand-experience, development, ' +
      'packaging brand-experience, print and packaging graphic brand-experience';

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
