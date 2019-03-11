import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WordpressService} from '../../../services/wordpress.service';

@Component({
  selector: 'app-friends-component',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, AfterViewInit {
  public friends: Array<Object>;
  private postsUrl = 'assets/json/friends.json';
  private currentActiveSlide = 1;
  public quotes = [
    { text: 'The folks at Jupiter and the Giraffe did a stupendous job on our website', author: 'Jonny - CEO (Boombocs)'},
    { text: 'The end result speaks for itself', author: 'Matt Wilson - Founder (Veratrak)'},
    {
      text: 'From beginning to end, the project was handled efficiently <br>we would definitely use them again',
      author: 'Olivia Kirkman - (EPOCH)'
    },
    {
      text: 'I love their creative sensibility <br>and appreciate their professionalism and responsiveness',
      author: 'Neeta Madahar'
    }
  ];
  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;

  constructor(private wordpress: WordpressService) {}

  ngOnInit(): void {
    this.wordpress.getPostType('friends')
      .subscribe((friends: Array<any>) => {
        this.friends = friends;
      });
  }

  ngAfterViewInit(): void {
    this.setupSlider();
  }

  private setupSlider(): void {
    const slider = this.slider.nativeElement;
    const slides = Array.prototype.slice.call(slider.children);
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
