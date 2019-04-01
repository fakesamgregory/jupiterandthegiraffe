import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent {
  public content;

  constructor(private meta: Meta, private titleService: Title, private actr: ActivatedRoute, private router: Router) {
    this.actr.data
      .subscribe(res => this.content = res.work[0]);

    if (!this.content) {
      this.router.navigate(['/not-found']);
    } else {
      const TITLE = `${this.content.title.rendered} - ${this.content.acf.work_type}`;
      const DESC = this.content.excerpt.rendered.replace(/<[^>]*>/g, '');

      this.titleService.setTitle(TITLE);

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
  }
}
