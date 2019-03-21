import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {WordpressService} from '../../services/wordpress.service';

@Component({
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent implements OnInit {
  public team: Array<any>;
  public content: Object;

  constructor(private meta: Meta, private titleService: Title, private wordpress: WordpressService) {
    const TITLE = 'Who we are - We are Jupiter and the Giraffe';
    const DESC = 'Jupiter and the Giraffe are a not-so-ordinary branding agency. We love all things digital to the moon and back.';

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

  ngOnInit(): void {
    this.wordpress.getPostType('team')
      .subscribe((team: Array<any>) => this.team = team);

    this.wordpress.getPageId(260)
      .subscribe(content => this.content = content);
  }
}
