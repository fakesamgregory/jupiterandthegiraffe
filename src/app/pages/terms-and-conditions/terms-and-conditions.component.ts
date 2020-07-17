import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import { WindowRef } from 'src/app/services/window.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {
  public content: any;

  constructor(private meta: Meta,
              private titleService: Title,
              private actr: ActivatedRoute,
              @Inject(PLATFORM_ID) private platformId,
              private winRef: WindowRef) {
    this.actr.data
      .subscribe(res => {
        this.content = res.data;

        const TITLE = this.content.title.rendered;
        const DESC = 'The terms and conditions of engaging with Jupiter and the Giraffe.';

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
