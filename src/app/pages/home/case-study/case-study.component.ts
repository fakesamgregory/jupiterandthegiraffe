import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-case-study-component',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent {
  @Input() data: any;
  @Input() flip: false;

  constructor() {}
}
