import {Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';

@Component({
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss']
})
export class WhatComponent {
  public fixSidebar = false;
  public fixedCSS: object;
  @ViewChild('fixedWrap') fixedWrap: ElementRef;

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document
  ) {
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollY = this.window.pageYOffset || this.document.documentElement.scrollTop;
      console.log(scrollY, this.fixedWrap.nativeElement.getBoundingClientRect().top);
      this.fixSidebar = (scrollY > this.fixedWrap.nativeElement.getBoundingClientRect().top);
      this.fixedCSS = this.fixSidebar ? {
        top: 0,
        left: `${this.fixedWrap.nativeElement.getBoundingClientRect().left}px`,
      } : {};
    }
  }
}
