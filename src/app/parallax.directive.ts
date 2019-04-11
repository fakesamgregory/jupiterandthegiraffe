import {Directive, Input, ElementRef, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') ratio = 1;
  public initialTop = 0;
  private scrollInterval: any;

  constructor(
    private eleRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(WINDOW) private window: Window,
  ) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    this.eleRef.nativeElement.style.transition = 'transform .3s ease';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.eleRef.nativeElement.style.transform = `translateY(${(this.initialTop - (this.window.scrollY * this.ratio))}px)`;
    }
  }

}
