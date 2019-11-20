import {Component, Input} from '@angular/core';
import { ServicesService } from 'src/app/stores/services.service';

@Component({
  selector: 'app-services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  @Input() services: Array<any>;
  @Input() nested = false;

  constructor() {}
}
