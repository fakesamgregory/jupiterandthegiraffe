import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {WINDOW} from '@ng-toolkit/universal';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent {
  public content;

  constructor(private meta: Meta,
              private titleService: Title,
              private actr: ActivatedRoute,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId,
              @Inject(WINDOW) private window: Window) {
    this.actr.data
      .subscribe(res => this.content = res.work[0]);

    if (!this.content) {
      this.router.navigate(['/not-found']);
    } else {
      const TITLE = `${this.content.title.rendered} | ${this.content.acf.work_type} | Juptiter and the Giraffe`;
      const DESC = this.content.excerpt.rendered.replace(/<[^>]*>/g, '');

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
    }
  }
}
