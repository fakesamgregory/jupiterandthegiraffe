import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pricing-component',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  @Input() cta: string;
  constructor() { }
}
