import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss'],
})
export class WebDevelopmentComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Web Development';
    const DESC =
      'We\'re confident we can build the site you need, using elegant user experience (UX) and making it accessible to all. ' +
      'We have your users in mind.';

    this.titleService.setTitle(TITLE);

    this.meta.updateTag({
      name: 'description',
      content: DESC,
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: TITLE,
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DESC,
    });
    this.meta.updateTag({
      itemprop: 'name',
      content: TITLE,
    });
  }

}
