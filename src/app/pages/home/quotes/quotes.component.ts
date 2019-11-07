import {Component, Input, OnDestroy, ElementRef, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-quotes-component',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit, OnDestroy {
  @Input() quotes: Array<any>;
  public currentActiveSlide = 1;
  private timeout = null;
  public showMyElement = false;
  @ViewChild('slider', {static: false}) slider: ElementRef;

  constructor() {}

  ngOnInit() {
    this.timeout = setTimeout(() => {
      this.setupSlider();
    }, 0);
  }

  ngOnDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  private setupSlider(): void {
    const slider = this.slider.nativeElement;
    const slides = [].slice.call(slider.children);
    const slideTimerSecs = 6;

    // Sets up slider height
    slider.style.height =
      slides.reduce((accumulator, currentValue) => {
        const height = currentValue.clientHeight;
        currentValue.style.position = 'absolute';

        if (height > accumulator) {
          return height + 100;
        } else {
          return accumulator;
        }
      }, 0) + 'px';

    // Sets interval for timer
    setInterval(() => {
      this.currentActiveSlide +=  1;
      if (this.currentActiveSlide > this.quotes.length) {
        this.currentActiveSlide = 1;
      }
    }, slideTimerSecs * 1000);
  }
}
