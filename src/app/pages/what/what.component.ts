import {Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss']
})
export class WhatComponent {
  public fixSidebar = false;
  public fixedCSS: object;
  private scrollInterval;
  public activeIndex = null;
  public content: any;
  public services: any;
  @ViewChild('fixedWrap') fixedWrap: ElementRef;
  @ViewChild('scrollSection') scrollSection: ElementRef;

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document,
    private actr: ActivatedRoute,
    private router: Router) {
    this.actr.data
      .subscribe(res => {
        this.content = res.data[1];
        this.services = res.data[0];

        const TITLE = 'Brand Strategy, Brand Identity, Brand Experience | Jupiter and the Giraffe';
        const DESC = '3 services to rule them all. Brand Strategy, Brand Identity and Brand Experience. ' +
              'From Strategy, to brand, to design to experience.';

        this.titleService.setTitle( TITLE );

        this.meta.updateTag({
          name: 'description',
          content: DESC
        });
        this.meta.updateTag({
          property: 'og:description',
          content: DESC,
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
          property: 'og:title',
          content: TITLE
        });
        if (isPlatformBrowser(this.platformId)) {
          this.meta.updateTag({
            property: 'og:url',
            content: this.window.location.href,
          });
        }
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

  public goToSection(event, index: number): void {
    event.preventDefault();
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop;
    this.window.scrollTo({
      top: (this.scrollSection.nativeElement.children[index].getBoundingClientRect().top + offset) - 100,
      behavior: 'smooth'
    });
  }
}
