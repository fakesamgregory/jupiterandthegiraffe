import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface MailchimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-how-to-build-an-effective-brand',
  templateUrl: './how-to-build-an-effective-brand.component.html',
  styleUrls: ['./how-to-build-an-effective-brand.component.scss']
})
export class HowToBuildAnEffectiveBrandComponent {
  public emailSignup: FormGroup;
  public submitted = false;
  public sending = false;
  public error = '';
  private emailSignupUrl =
    '//jupiterandthegiraffe.us20.list-manage.com/subscribe/post-json?u=c25f6fc2b7f38aa344e8d5b4a&id=467e3cb96c';

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: any,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.setMetaData({
      TITLE: 'Download Our FREE eBook "How To Build An Effective Brand" now!',
      DESC: 'We\'re giving you FREE access to our branding book "How To Build An Effective Brand"'
    });
    this.createForm();
  }

  private setMetaData(content): void {
    const { TITLE, DESC } = content;

    this.titleService.setTitle(TITLE);

    this.meta.updateTag({
      property: 'og:description',
      content: DESC,
    });
    this.meta.updateTag({
      name: 'description',
      content: DESC,
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: TITLE,
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DESC,
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

  private createForm(): void {
    this.emailSignup = this.fb.group({
      MERGE0: ['', Validators.compose([Validators.required, Validators.email])],
      MERGE1: ['', Validators.compose([Validators.required])],
      b_name: [''],
      b_email: [''],
      b_comment: [''],
    });
  }

  sendForm(post) {
    if (!post.b_name && !post.b_email && !post.b_comment) {
      this.sending = true;

      let url = `${this.emailSignupUrl}`;

      Object.keys(post).forEach(item => {
        if (post[item]) {
          url += `&${item}=${post[item]}`;
        }
      });

      this.http.jsonp(url, 'c')
        .subscribe((response: any) => {
          this.sending = false;
          this.submitted = response;
        });
    }
  }

}
