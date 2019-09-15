import {WINDOW} from '@ng-toolkit/universal';
import { isPlatformBrowser } from '@angular/common';
import { Input, Directive, ElementRef, PLATFORM_ID, Inject, HostListener, Optional } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  // tslint:disable:no-input-rename
  @Input('ratio') ratio = 1;
  @Input('direction') direction = 'vertical';
  public initialTop = 0;
  private scrollInterval: any;

  constructor(
    private eleRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() @Inject(WINDOW) private window: Window,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
      this.eleRef.nativeElement.style.transition = 'transform .3s ease';
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.direction === 'horizontal') {
        this.eleRef.nativeElement.style.transform = `translateX(${(this.initialTop + (this.window.scrollY * this.ratio))}px)`;
      } else {
        this.eleRef.nativeElement.style.transform = `translateY(${(this.initialTop - (this.window.scrollY * this.ratio))}px)`;
      }
    }
  }

}
