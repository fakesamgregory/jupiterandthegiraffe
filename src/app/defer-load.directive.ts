import {ElementRef, EventEmitter, AfterViewInit, Directive, Output, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appDeferLoad]',
})
export class DeferLoadDirective implements AfterViewInit {
  @Output() public appDeferLoad: EventEmitter<any> = new EventEmitter();
  /* tslint:disable-next-line */
  public _intersectionObserver: IntersectionObserver;

  constructor(
    /* tslint:disable-next-line */
    private _element: ElementRef, 
    @Inject(PLATFORM_ID) private platformId
  ) {
    this._element.nativeElement.classList.add('lazy-load');
  }

  public ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this._intersectionObserver = new IntersectionObserver(entries => {
        this.checkForIntersection(entries);
      }, {});
      this._intersectionObserver.observe(this._element.nativeElement as Element);
    }
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.appDeferLoad.emit();
        this._element.nativeElement.classList.add('lazy-load--loaded');
        this._intersectionObserver.unobserve(this._element.nativeElement as Element);
        this._intersectionObserver.disconnect();
      }
    });
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (entry as any).isIntersecting && entry.target === this._element.nativeElement;
  }
}
