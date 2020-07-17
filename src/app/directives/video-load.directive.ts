import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVideoLoad]'
})
export class VideoLoadDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('videoId') vidId = '';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) { }

  @HostListener('click') loadVideo() {
    this.renderer.addClass(this.elementRef.nativeElement, 'video--playing');
    this.elementRef.nativeElement.innerHTML =
      `<iframe
        src="https://www.youtube.com/embed/${this.vidId}?rel=0&showinfo=0&autoplay=1"
        frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
        ></iframe>`;

  }
}
