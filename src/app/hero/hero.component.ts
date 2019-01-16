import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() home = false;

  constructor () { }
}
