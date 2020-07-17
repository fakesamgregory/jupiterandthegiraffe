import {Component, Inject, PLATFORM_ID, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { WindowRef } from 'src/app/services/window.service';

@Component({
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent implements OnInit {
  public team: [];
  public content: any;

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(PLATFORM_ID) private platformId,
              private winRef: WindowRef,
              private actr: ActivatedRoute) { }

  ngOnInit() {
    this.actr.data
      .subscribe(res => {
        this.team = res.data[0];
        this.content = res.data[1];

        const TITLE = 'About Us | SaaS Product Design and Development Studio';
        const DESC = 'We\'re a web studio specialising in helping tech startups who want to ' +
          'drive the future of humanity build SaaS products of the future.';

        this.titleService.setTitle( TITLE );

        this.meta.updateTag({
          property: 'og:description',
          content: DESC
        });
        this.meta.updateTag({
          name: 'description',
          content: DESC,
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
          property: 'og:title',
          content: TITLE
        });
        if (isPlatformBrowser(this.platformId)) {
          this.meta.updateTag({
            property: 'og:url',
            content: this.winRef.nativeWindow.location.href,
          });
        }
    });
  }
}
