import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {WordpressService} from '../../services/wordpress.service';

@Component({
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent {
  public team: Array<any>;
  public content: Object;

  constructor(private meta: Meta, private titleService: Title, private wordpress: WordpressService) {
    this.wordpress.getPostType('team')
      .subscribe((team: Array<any>) => this.team = team);

    this.wordpress.getPageId(260)
      .subscribe(content => this.content = content);

    const TITLE = 'Who are Jupiter and the Giraffe | Jupiter and the Giraffe';
    const DESC = 'Jupiter and the Giraffe are a not-so-ordinary branding agency. We specialise in Brand Strategy, Brand ' +
      'Identity and Brand Experience.';

    this.titleService.setTitle( TITLE );

    this.meta.updateTag({
      name: 'description',
      content: DESC
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: TITLE
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DESC
    });
    this.meta.updateTag({
      itemprop: 'name',
      content: TITLE
    });
  }
}
