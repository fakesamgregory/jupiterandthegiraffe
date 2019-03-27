import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  public person;

  constructor(private meta: Meta, private titleService: Title, private actr: ActivatedRoute, private router: Router) {
    this.actr.data
      .subscribe(res => this.person = res.person[0]);

    if (!this.person) {
      this.router.navigate(['/not-found']);
    } else {
      const TITLE = `${this.person.title.rendered} - ${this.person.acf.title}`;
      const DESC = this.person.excerpt.rendered.replace(/<[^>]*>/g, '');

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
