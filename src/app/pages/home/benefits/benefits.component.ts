import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-benefits-component',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  @Input() benefits: Array<any>;

  constructor() { }
}
