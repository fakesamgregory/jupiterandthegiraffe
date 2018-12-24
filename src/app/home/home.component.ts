import { Component, HostListener, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { FriendsComponent } from './friends/friends.component';
import { WINDOW } from '../services/window.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  public navIsFixed = false;
  public inputPos: number;
  @ViewChild('myname') input;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window) {}

  ngAfterViewInit() {
    this.inputPos = this.input.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.navIsFixed = number > this.inputPos ? true : false;
  }
}
