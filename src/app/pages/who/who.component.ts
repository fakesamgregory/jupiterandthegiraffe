import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {WordpressService} from '../../services/wordpress.service';
import {isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';
import {forkJoin} from 'rxjs';

@Component({
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent {
  public team: Array<any>;
  public content: Object;

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(PLATFORM_ID) private platformId,
              @Inject(WINDOW) private window: Window,
              private wordpress: WordpressService) {
    forkJoin([
      this.wordpress.getPostType('team'),
      this.wordpress.getPageId(260)
    ]).subscribe((res: Array<any>) => {
      this.team = res[0];
      this.content = res[1];

      const TITLE = 'We are a Brand Strategy and Design Studio';
      const DESC = 'We\'re a branding studio specialising in helping tech startups who want to drive the future of humanity.';

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
          content: this.window.location.href,
        });
      }
    });
  }
}
