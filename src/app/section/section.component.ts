import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-component',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() headingText: string;
  @Input() headingLevel: number;
}
