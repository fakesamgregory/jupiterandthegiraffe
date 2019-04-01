import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {WordpressService} from '../../../services/wordpress.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-friends-component',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnDestroy {
  public friends: Array<any>;
  public quotes = [];
  private currentActiveSlide = 1;
  private timeout = null;
  public showMyElement = false;
  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;

  constructor(private wordpress: WordpressService) {
    this.wordpress.getPageId(293)
      .subscribe((content: any) => {
        const friendPageContent =
          content.acf.featured_friends.map(friend => this.wordpress.getPostTypeById(friend.friends.post_type, friend.friends.ID));

        forkJoin(friendPageContent)
          .subscribe((friends) => {
            this.friends = friends;
          });
      });

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
