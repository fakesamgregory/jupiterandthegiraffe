import { Component, Input } from '@angular/core';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {
  @Input() page: string;
  @Input() text: string;
  @Input() image: string;
}
