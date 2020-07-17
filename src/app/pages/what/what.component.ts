import {Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import { ServicesService } from 'src/app/stores/services.service';
import { WindowRef } from 'src/app/services/window.service';

@Component({
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss']
})
export class WhatComponent implements OnInit {
  public fixSidebar = false;
  public fixedCSS: object;
  private scrollInterval: number;
  public activeIndex: number;
  public content: any;
  public services: any;
  @ViewChild('fixedWrap', {static: false}) fixedWrap: ElementRef;
  @ViewChild('scrollSection', {static: false}) scrollSection: ElementRef;

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: Document,
    private winRef: WindowRef,
    public serivcesService: ServicesService) { }

  ngOnInit() {
    const TITLE = 'App Strategy, App Design, App Development | Jupiter and the Giraffe';
    const DESC = '3 services to rule them all. App Strategy, App Design and App Development. ' +
          'From strategy to design to MVP.';

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
        content: this.winRef.nativeWindow.location.href,
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {

      if (Boolean(this.scrollInterval)) {
        this.winRef.nativeWindow.clearTimeout(this.scrollInterval);
      }

      this.scrollInterval = this.winRef.nativeWindow.setTimeout(() => {
        [].forEach.call(this.scrollSection.nativeElement.children, (section, index: number) => {
          const isThisSection = section.getBoundingClientRect().top <= (this.winRef.nativeWindow.innerHeight / 2);

          if (isThisSection) {
            this.activeIndex = index;
          }
        });
      }, 100);
    }
  }

  public goToSection(event, index: number): void {
    event.preventDefault();
    const offset = this.winRef.nativeWindow.pageYOffset || this.document.documentElement.scrollTop;
    this.winRef.nativeWindow.scrollTo({
      top: (this.scrollSection.nativeElement.children[index].getBoundingClientRect().top + offset) - 100,
      behavior: 'smooth'
    });
  }
}
