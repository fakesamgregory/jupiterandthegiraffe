import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.postsUrl)
      .subscribe((data: Object) => {
        this.friends = data['friends'];
      });
  }

  ngAfterViewInit(): void {
    this.setupSlider();
  }

  setupSlider(): void {
    const slide = this.slider.nativeElement;
    const slides = Array.prototype.slice.call(slide.children);
    const slideTimerSecs = 6;

    // Sets up slider height
    slide.style.height =
      slides.reduce((accumulator, currentValue) => {
        const height = currentValue.offsetHeight;
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
}
