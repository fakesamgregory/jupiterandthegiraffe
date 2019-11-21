import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from 'src/app/stores/homepage-store.service';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() home = false;
  @Input() funnel = false;
  public content: any;

  constructor(public router: Router, public homepageService: HomepageService) {  }

  ngOnInit() {
    this.homepageService.homepage$
      .subscribe((data) => this.content = data);
  }
}
