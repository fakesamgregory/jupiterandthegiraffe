import {ElementRef, EventEmitter, AfterViewInit, Directive, Output} from '@angular/core';

@Directive({
  selector: '[appDeferLoad]',
})
export class DeferLoadDirective implements AfterViewInit {
  @Output() public appDeferLoad: EventEmitter<any> = new EventEmitter();
  public _intersectionObserver: IntersectionObserver;

  constructor (
    private _element: ElementRef
  ) {
    this._element.nativeElement.style.opacity = 0;
    this._element.nativeElement.style.transition = 'opacity .3s ease';
  }

  public ngAfterViewInit () {
    this._intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, {});
    this._intersectionObserver.observe(<Element>(this._element.nativeElement));
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.appDeferLoad.emit();
        setTimeout(() => {
          this._element.nativeElement.style.opacity = 1;
        }, 100);
        this._intersectionObserver.unobserve(<Element>(this._element.nativeElement));
        this._intersectionObserver.disconnect();
      }
    });
  }

  private checkIfIntersecting (entry: IntersectionObserverEntry) {
    return (<any>entry).isIntersecting && entry.target === this._element.nativeElement;
  }
}
