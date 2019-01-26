import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public work;
  public error;

  constructor(private meta: Meta, private titleService: Title, private route: ActivatedRoute) {
    const TITLE = 'Our Work - Feast your eyes on our body of work';
    const DESC = 'There\s many things we have done. Websites, branding, UX/UI, logos, Wordpress, stylguides';

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
    this.route.data
      .subscribe(
        data => this.work = data.work,
        error => this.error = error
    );
  }
}
