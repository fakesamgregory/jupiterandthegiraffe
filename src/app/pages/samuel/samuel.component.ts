import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-samuel',
  templateUrl: './samuel.component.html',
  styleUrls: ['./samuel.component.scss']
})
export class SamuelComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Samuel Gregory - Founder/CEO';
    const DESC = 'I started my professional career in the design and digital department at Framestore...';

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
