import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {WordpressService} from '../../../services/wordpress.service';
import {HighlightedFriendsService} from '../../../stores/highlighted-friends.service';

@Component({
  selector: 'app-friends-component',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnDestroy {
  public quotes: Array<any>;
  public currentActiveSlide = 1;
  private timeout = null;
  public showMyElement = false;
  @ViewChild('slider', {static: false}) slider: ElementRef;

  constructor(
    private wordpress: WordpressService,
    public highlightedFriendStore: HighlightedFriendsService
  ) {
    this.wordpress.getPostType('quotes')
      .subscribe((quotes: Array<any>) => {
        this.quotes = quotes;
        this.timeout = setTimeout(() => {
          this.setupSlider();
        }, 0);
      });
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
          return height;
        } else {
          return accumulator;
        }
      }, 0) + 'px';

    // Sets interval for timer
    setInterval(() => {
      this.currentActiveSlide +=  1;
      if (this.currentActiveSlide > this.quotes.length - 1) {
        this.currentActiveSlide = 1;
      }
    }, slideTimerSecs * 1000);
  }

  public makeUrl(content: string): string {
    return `/${content.replace(/(<([^>]+)>)/ig, '').trim()}`;
  }
}
