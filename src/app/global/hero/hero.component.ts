import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() home = false;
  @Input() funnel = false;
  public content = '';

  constructor(public router: Router, private wordpress: WordpressService) { }

  ngOnInit() {
    this.wordpress.getPageId(293)
      .subscribe(data => this.content = data);
  }
}
