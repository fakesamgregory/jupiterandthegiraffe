import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-we-are-component',
  templateUrl: './we-are.component.html',
  styleUrls: ['./we-are.component.scss']
})
export class WeAreComponent {
  @Input() cta: string;
  constructor() { }
}
