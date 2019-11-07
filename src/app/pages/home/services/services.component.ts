import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @Input() services: Array<any>;

  constructor() {}
}
