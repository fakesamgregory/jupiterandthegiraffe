import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {
  private url = 'https://blog.jupiterandthegiraffe.com/wp-json/wp/v2';
  public content = '';
  public title = '';

  constructor(private meta: Meta, private titleService: Title, private http: HttpClient) {
    const TITLE = 'Terms and Conditions';
    const DESC = 'Check out our T&C\'s';

    this.titleService.setTitle( TITLE );

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

  ngOnInit() {
    this.http
      .get(`${this.url}/pages/144`)
      .subscribe((blogs: Array<any>) => {
        this.content = blogs.content.rendered;
        this.title = blogs.title.rendered;
        });
  }
}
