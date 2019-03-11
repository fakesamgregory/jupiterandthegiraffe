import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public location: String;
  public type: any;

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.location = this.route.snapshot.data.location;
    this.type = this.route.snapshot.data.type;

    const TITLE = `Jupiter and the Giraffe - ${this.location}`;
    const DESC =
      `We bring all our services to ${this.location}, be it web development, branding or design.
       As always we will start with a strategy workshop and build out your needs and solutions to your problems.`;

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
