import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { isPlatformBrowser } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {WordpressService} from '../../services/wordpress.service';

export interface Item {
  email: string;
  b_name: string;
  b_email: string;
  b_comment: string;
}

@Component({
  selector: 'app-mvp-package',
  templateUrl: './mvp-package.component.html',
  styleUrls: ['./mvp-package.component.scss']
})
export class MVPPackageComponent {
  public rForm: FormGroup;
  public post: any;
  public email: string;
  itemRef: AngularFireList<any>;
  item: any;
  public sent = false;
  public quotes: any;
  public content: any;

  constructor(
    private meta: Meta,
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: any,
    private fb: FormBuilder,
    public db: AngularFireDatabase,
    private wordpress: WordpressService,
    private actr: ActivatedRoute,
  ) {

    this.actr.data
      .subscribe(res => {
        this.content = res.data;

        this.setMetaData({
          TITLE: `${this.content.title.rendered} | Jupiter and the Giraffe`,
          DESC: 'Reach MVP sooner and kick-start your SaaS product and start getting customers.',
          SHARE_IMAGE: 'https://jupiterandthegiraffe.com/assets/images/mvp-package.png',
          SHARE_IMAGE_ALT: ''
        });
      });

    this.itemRef = db.list('mvp');
    this.item = this.itemRef.valueChanges();
    this.createForm();
  }

  private setMetaData(content): void {
    const { TITLE, DESC, SHARE_IMAGE, SHARE_IMAGE_ALT } = content;

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
      content: SHARE_IMAGE_ALT,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: SHARE_IMAGE
    });

    if (isPlatformBrowser(this.platformId)) {
      this.meta.updateTag({
        property: 'og:url',
        content: this.window.location.href,
      });
    }

    this.wordpress.getPostType('quotes')
      .subscribe(data => this.quotes = data);
  }

  private createForm(): void {
    this.rForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      validate: '',
      b_name: [''],
      b_email: [''],
      b_comment: [''],
    });
  }

  public sendForm(post: Item): void {
    if (!post.b_name && !post.b_email && !post.b_comment && post.email) {
      this.item = {
        email: post.email,
        date: Date(),
      };

      this.itemRef.push(this.item);

      this.sent = true;
      this.email = post.email;

      if (isPlatformBrowser(this.platformId)) {
        this.window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
}
