import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss']
})
export class WhatComponent {
  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'What We Do - Branding, Websites, UX/UI, Logos';
    const DESC = 'We care about your brand as much as you do, we have experience in logo design and corporate identity.' +
      'To finish it off, we can build you a kickass website to go with it.';

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
