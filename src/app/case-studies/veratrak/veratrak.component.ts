import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-veratrak',
  templateUrl: './veratrak.component.html',
  styleUrls: ['./veratrak.component.scss']
})
export class VeratrakComponent {
  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Veratrak - Branding and Website';
    const DESC = 'Veratrak is a cutting-edge technology created by a start-up in the heart of east London. ' +
      'Their product aims to solve many problems that riddle the pharmaceutical industry,  ' +
      'the main one being the collaboration and sharing of drug related documentation in the supply chain that has historically ' +
      'been a difficult and lengthy process.';

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
