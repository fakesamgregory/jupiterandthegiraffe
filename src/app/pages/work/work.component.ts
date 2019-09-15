import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-toolkit/universal';
import {isPlatformBrowser} from '@angular/common';
import { DataObject } from 'src/app/services/wordpress.service';

declare global {
  interface Window { hoverEffect: any; }
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  public work: DataObject;
  public error;
  public showMyElement = false;

  constructor(
    private meta: Meta,
    private titleService: Title,
    private actr: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId,
    @Inject(WINDOW) private window: Window
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

    if (isPlatformBrowser(this.platformId)) {
      this.window.hoverEffect = this.window.hoverEffect || {};
    }
  }

  public load(e) {
    if (isPlatformBrowser(this.platformId)) {
      const src = e.currentTarget ? e.currentTarget.src : e.path[0].currentSrc;

      return this.window.hoverEffect({
          parent: e.currentTarget ? e.currentTarget.parentElement : e.path[1],
          image1: src + '?',
          image2: src + '?',
          displacementImage: '../../assets/images/displacement.png'
      });
    }
  }
}
