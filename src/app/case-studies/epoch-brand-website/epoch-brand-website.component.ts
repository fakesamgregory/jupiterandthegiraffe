import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-epoch-brand-website',
  templateUrl: './epoch-brand-website.component.html',
  styleUrls: ['./epoch-brand-website.component.scss']
})
export class EpochBrandWebsiteComponent {
  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'EPOCH - Brand and website';
    const DESC = 'The members of EPOCH are a group of highly knowledgeable leaders in the pharmaceutical industry. ' +
      'Their minds come together to redefine industry wide problems, ' +
      'elucidating the way for others and establishing a platform for thought-leadership. We wanted a website for ' +
      'EPOCH which not only looked great but introduced new ideas. Giving their website these modern, ' +
      'ambitious twists meant there is confidence in their work.';

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
