import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  public content: any;

  constructor(
    private meta: Meta,
    private titleService: Title,
    private actr: ActivatedRoute,
    private router: Router) {
    this.actr.data
      .subscribe(res => this.content = res.data[0]);

    const TITLE = `${this.content.title.rendered} | Jupiter and the Giraffe`;
    const DESC =
      'Branding, brand, brand-strategy, brand identity (logo), tone of voice, corporate, content, marketing brand-strategy, brand messaging';

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
