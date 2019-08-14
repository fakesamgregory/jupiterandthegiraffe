import {Component, Inject, PLATFORM_ID, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-toolkit/universal';
import {isPlatformBrowser, DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements ngOnInit {
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

  public ngOnInit(): void {
    const el = this.document.getElementsByClassName('work__link');

    this.window.setTimeout(this.applyHover.bind(this, el), 0);
  }

  private applyHover(el) {
    this.work.forEach((workItem, index) => {
      new this.window.hoverEffect({
        parent: el[index],
        image1: workItem.acf.homepage_image.sizes.large + '?',
        image2: workItem.acf.homepage_image.sizes.large + '?',
        displacementImage: 'https://raw.githubusercontent.com/robin-dela/hover-effect/master/example/img/displacement/4.png'
      });
    });
  }
}
