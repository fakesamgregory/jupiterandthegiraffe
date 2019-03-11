import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-suzannah',
  templateUrl: './suzannah.component.html',
  styleUrls: ['./suzannah.component.scss'],
})
export class SuzannahComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Suzannah James - Creative Director';
    const DESC =
      'I started my professional career as a copywriter for the digital department at Vodafone UK on a graduate marketing scheme...';

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
