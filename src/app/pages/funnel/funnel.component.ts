import { Component } from '@angular/core';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.scss']
})
export class FunnelComponent {
  public testimonials: any;

  constructor(
    private wordpress: WordpressService,
  ) {
    this.wordpress.getPostType('quotes', {per_page: 3})
      .subscribe((quotes: Array<any>) => this.testimonials = quotes);
   }
}
