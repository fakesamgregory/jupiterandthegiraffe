import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { WindowRef } from 'src/app/services/window.service';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface MailchimpResponse {
  result: string;
  msg: string;
}

interface Post {
  b_name: string;
  b_email: string;
  b_comment: string;
}

@Component({
  selector: 'app-how-to-build-an-effective-brand',
  templateUrl: './how-to-build-an-effective-brand.component.html',
  styleUrls: ['./how-to-build-an-effective-brand.component.scss']
})
export class HowToBuildAnEffectiveBrandComponent {
  public emailSignup: FormGroup;
  public submitted = null;
  public sending = false;
  public error = '';
  private emailSignupUrl =
    '//jupiterandthegiraffe.us20.list-manage.com/subscribe/post-json?u=c25f6fc2b7f38aa344e8d5b4a&id=467e3cb96c';

  constructor(
    private meta: Meta,
    private titleService: Title,
    private winRef: WindowRef,
    @Inject(PLATFORM_ID) private platformId: any,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.setMetaData({
      TITLE: 'Download Our FREE eBook "How To Build An Effective Tech Brand" Now!',
      DESC: 'We\'re giving you FREE access to our branding book "How To Build An Effective Tech Brand"',
      SHARE_IMAGE: 'https://jupiterandthegiraffe.com/assets/images/howtolaunch-shareimage.jpg'
    });
    this.createForm();
  }

  private setMetaData(content): void {
    const { TITLE, DESC, SHARE_IMAGE} = content;

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
    this.meta.updateTag({
      name: 'twitter:image',
      content: SHARE_IMAGE
    });
    this.meta.updateTag({
      name: 'twitter:image:alt',
      content: 'How To Launch An Awesome Tech Brand book cover'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: SHARE_IMAGE
    });

    if (isPlatformBrowser(this.platformId)) {
      this.meta.updateTag({
        property: 'og:url',
        content: this.winRef.nativeWindow.location.href,
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

  public sendForm(post: Post): void {
    if (!post.b_name && !post.b_email && !post.b_comment) {
      this.sending = true;

      let url = `${this.emailSignupUrl}`;

      Object.keys(post).forEach(item => {
        if (post[item]) {
          url += `&${item}=${post[item]}`;
        }
      });

      this.http.jsonp(url, 'c')
        .subscribe((response: MailchimpResponse) => {
          this.sending = false;
          this.submitted = response;
        });
    }
  }

}
