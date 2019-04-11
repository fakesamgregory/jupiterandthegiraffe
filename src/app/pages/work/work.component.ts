import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  public work;
  public error;

  constructor(private meta: Meta, private titleService: Title, private actr: ActivatedRoute, private router: Router) {
    this.actr.data
      .subscribe(res => {
        console.log(res);
        this.work = res.work;
      });

    if (!this.work) {
      this.router.navigate(['/not-found']);
    } else {
      const TITLE = 'Our Work - Feast your eyes on our body of work';
      const DESC = 'There\s many things we have done. Websites, brand-identity, UX/UI, logos, Wordpress, stylguides';

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
