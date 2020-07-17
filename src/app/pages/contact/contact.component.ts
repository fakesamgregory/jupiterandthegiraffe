import {Component, Inject, isDevMode, PLATFORM_ID} from '@angular/core';
import {OnInit} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Meta, Title} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';
import { WindowRef } from 'src/app/services/window.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
  name: string;
  email: string;
  message: string;
  html: string;
  date: string;
  company: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public rForm: FormGroup;
  public post: any;
  public message: string;
  public name: string;
  public company: string;
  public email: string;
  public recaptchaReactive: string;
  itemRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(private fb: FormBuilder,
              public db: AngularFireDatabase,
              private meta: Meta,
              private titleService: Title,
              private winRef: WindowRef,
              @Inject(PLATFORM_ID) private platformId: any) {
    const TITLE = 'Contact Us | Jobs or Projects | App Strategy, App Design, App Development';
    const DESC = 'Good to see you. We were just talking about you! Drop us a line and let us know why you\'re here. ' +
      'If you know someone that needs our help, put their contact details in the message and you may be rewarded with ' +
      '10% of the final invoice ';

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
        content: this.winRef.nativeWindow.location.href,
      });
    }
  }

  ngOnInit() {
    this.itemRef = db.list('messages');
    this.item = this.itemRef.valueChanges();
    this.createForm();
  }

  private createForm(): void {
    this.rForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      message: [null, Validators.compose([Validators.required, Validators.minLength(15)])],
      validate: '',
      // recaptchaReactive: [null, Validators.required],
    });
  }

  public sendForm(post: Item): void {
    const company = post.company ? ` from ${post.company}` : '';

    this.name = post.name;
    this.email = post.email;
    this.message = post.message;

    if (!isDevMode()) {
      this.itemRef.push({
        name: this.name,
        email: this.email,
        message: this.message,
        html: '<p>You were contacted from Jupiter and the Giraffe\'s website by ' + this.name + company + '.</p>' +
        '<p>They said... </br></br>"' + this.message + '".</p>' +
        '<p>You can contact them back on ' + this.email + '</p>',
        date: Date(),
      })
      .then(data => console.log(data))
      .catch(data => console.log(data));

      if (isPlatformBrowser(this.platformId)) {
        this.winRef.nativeWindow.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
}
