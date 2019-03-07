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
  private currectActiveSlide = 0;
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
    const slides = Array.prototype.slice.call(this.slider.nativeElement.children);
    const slideTimerSecs = 6;

    this.slider.nativeElement.style.height =
      slides.reduce((accumulator, currentValue) => {
        const height = currentValue.offsetHeight;
        currentValue.style.position = 'absolute';

        if (height > accumulator) {
          return height;
        } else {
          return accumulator;
        }
      }, 0) + 'px';

    slides[0].classList.add('slide--visible');

    setInterval(() => {
      slides.forEach((slide, index) => {
        slide.classList.remove('slide--visible');
        slide.setAttribute('aria-hidden', true);

        if (index === this.currectActiveSlide) {
          slide.classList.add('slide--visible');
          slide.setAttribute('aria-hidden', false);
        }
      });

      this.currectActiveSlide +=  1;
      if (this.currectActiveSlide > slides.length - 1) {
        this.currectActiveSlide = 0;
      }
    }, slideTimerSecs * 1000);
  }
}
