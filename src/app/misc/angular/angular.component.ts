import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Angular';
    const DESC =
      'Angular takes many names (Angular 2+, Angular version 2 and above). The reason for this is that the Angular team ' +
      'make a stark departure to how Angular v1 was built an so the distinction needs to be made what version is being used ' +
      'particularly in the dev community as the skillsets are quite varied. Jupiter and the Giraffe has experience in both ' +
      'versions but we prefer V2. Our own website was built in it.';

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
