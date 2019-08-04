import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';

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
    @Inject(PLATFORM_ID) private platformId,
    @Inject(WINDOW) private window: Window,
    private router: Router,) {
    this.actr.data
      .subscribe(res => {
        if (!res.data[0]) {
          this.router.navigate(['/not-found']);
        } else {
          this.content = res.data[0];

          const TITLE = `${this.content.title.rendered} | Jupiter and the Giraffe`;
          const DESC = this.content.excerpt.rendered.replace(/<[^>]+>/gm, '');

          this.titleService.setTitle(TITLE);

          this.meta.updateTag({
            property: 'og:image',
            content: this.content._embedded['wp:featuredmedia'][0].source_url,
          });
          this.meta.updateTag({
            name: 'twitter:image',
            content: this.content._embedded['wp:featuredmedia'][0].source_url,
          });
          this.meta.updateTag({
            name: 'twitter:image:alt',
            content: this.content._embedded['wp:featuredmedia'][0].alt || '',
          });
          this.meta.updateTag({
            property: 'og:description',
            content: DESC,
          });
          this.meta.updateTag({
            name: 'description',
            content: DESC,
          });
          this.meta.updateTag({
            name: 'twitter:description',
            content: DESC,
          });
          this.meta.updateTag({
            name: 'twitter:title',
            content: TITLE,
          });
          this.meta.updateTag({
            property: 'og:title',
            content: TITLE,
          });

          if (isPlatformBrowser(this.platformId)) {
            this.meta.updateTag({
              property: 'og:url',
              content: this.window.location.href,
            });
          }
        }
      });
  }
}
