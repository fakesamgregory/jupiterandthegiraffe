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
  private scrollInterval: object;
  public activeIndex = null;
  @ViewChild('fixedWrap') fixedWrap: ElementRef;
  @ViewChild('scrollSection') scrollSection: ElementRef;

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document
  ) {
    const TITLE = 'Strategy, Branding, Websites, UX/UI, Logos, Brand Stratey';
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

      if (Boolean(this.scrollInterval)) {
        this.window.clearTimeout(this.scrollInterval);
      }

      this.scrollInterval = this.window.setTimeout(() => {
        [].forEach.call(this.scrollSection.nativeElement.children, (section, index: number) => {
          const isThisSection = section.getBoundingClientRect().top <= (this.window.innerHeight / 2);

          if (isThisSection) {
            this.activeIndex = index;
          }
        });
      }, 100);
    }
  }

  public goToSection(event: object, index: number): void {
    event.preventDefault();
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop;
    this.window.scrollTo({
      top: (this.scrollSection.nativeElement.children[index].getBoundingClientRect().top + offset) - 100,
      behavior: 'smooth'
    });
  }
}
