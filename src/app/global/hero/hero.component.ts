import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() home = false;
  @Input() funnel = false;

  constructor(public router: Router) { }
}
