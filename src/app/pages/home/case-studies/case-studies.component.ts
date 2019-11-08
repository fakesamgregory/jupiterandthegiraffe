import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-case-studies-component',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent {
  @Input() show = false;
  @Input() data: Array<any>;

  constructor() { }
}
