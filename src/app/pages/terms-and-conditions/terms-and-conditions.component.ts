import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {WordpressService} from '../../services/wordpress.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {
  private url = 'https://blog.jupiterandthegiraffe.com/wp-json/wp/v2';
  public content = '';
  public title = '';

  constructor(private meta: Meta, private titleService: Title, private wordpress: WordpressService) {
    const TITLE = 'Terms and Conditions';
    const DESC = 'Check out our T&C\'s';

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

  ngOnInit() {
    this.wordpress.getPageId(144)
      .subscribe((content: any) => {
        this.content = content.content.rendered;
        this.title = content.title.rendered;
      });
  }
}
