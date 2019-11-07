import {WINDOW} from '@ng-toolkit/universal';
import { isPlatformBrowser } from '@angular/common';
import { Input, Directive, ElementRef, PLATFORM_ID, Inject, HostListener, Optional, OnInit } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements OnInit {
  // tslint:disable:no-input-rename
  @Input('ratio') ratio = 1;
  @Input('direction') direction = 'vertical';
  @Input('preventMobile') preventMobile = false;
  public initialTop = 0;
  private scrollInterval: any;
  private isMobile: boolean;

  constructor(
    private eleRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() @Inject(WINDOW) private window: Window,
  ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
      this.eleRef.nativeElement.style.transition = 'transform .3s ease';
      this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile && this.preventMobile) {
      this.eleRef.nativeElement.style.transform = `translate(0)`;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)  && !(this.preventMobile && this.isMobile)) {
      if (this.direction === 'horizontal') {
        this.eleRef.nativeElement.style.transform = `translateX(${this.window.scrollY * this.ratio}px)`;
      } else {
        const offset = this.eleRef.nativeElement.scrollHeight / 2;
        this.eleRef.nativeElement.style.transform = `translateY(${(50 - (this.window.scrollY * this.ratio))}px)`;
      }
    }
  }
}
