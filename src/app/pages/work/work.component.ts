import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-toolkit/universal';
import {isPlatformBrowser, DOCUMENT} from '@angular/common';

declare global {
  interface Window { hoverEffect: any; }
}

window.hoverEffect = window.hoverEffect || {};

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  public work;
  public error;

  constructor(
    private meta: Meta,
    private titleService: Title,
    private actr: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId,
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document
    ) {
    this.actr.data
      .subscribe(res => {
        this.work = res.work;
        if (!this.work) {
          this.router.navigate(['/not-found']);
        } else {
          const TITLE = 'Projects | Jupiter and the Giraffe';
          const DESC = 'Bringing the most creative branders, designers and website developers ' +
          'into a tactical and strategic execution of work.';

          this.titleService.setTitle(TITLE);

          this.meta.updateTag({
            property: 'og:image',
            content: this.work[0]._embedded['wp:featuredmedia'][0].source_url,
          });
          this.meta.updateTag({
            name: 'twitter:image',
            content: this.work[0]._embedded['wp:featuredmedia'][0].source_url,
          });
          this.meta.updateTag({
            name: 'twitter:image:alt',
            content: this.work[0]._embedded['wp:featuredmedia'][0].alt || '',
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
            name: 'twitter:description',
            content: DESC
          });
          this.meta.updateTag({
            property: 'og:title',
            content: TITLE
          });
          this.meta.updateTag({
            name: 'twitter:title',
            content: TITLE
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

  public load(e) {
    const hover = this.window.hoverEffect;
      new hover({
        parent: e.path[1],
        image1: e.path[0].currentSrc + '?',
        image2: e.path[0].currentSrc + '?',
        displacementImage: '../../assets/images/displacement.png'
      })
  }
}
