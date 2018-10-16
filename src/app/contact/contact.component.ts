import {Component, isDevMode} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

export interface Item { name: string; email: string; message: string; html: string; date: string; }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public rForm: FormGroup;
  public post: any;
  public message = '';
  public name = '';
  public company = '';
  public email = '';
  itemRef: AngularFireList<any>;
  item;

  constructor(private fb: FormBuilder, public db: AngularFireDatabase, private http: HttpClient) {
    this.createForm();
    this.itemRef = db.list('messages');
    this.item = this.itemRef.valueChanges();
  }

  createForm() {
    this.rForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      message: [null, Validators.compose([Validators.required, Validators.minLength(15)])],
      validate: '',
      recaptchaReactive: [null, Validators.required]
    });
  }

  sendForm(post) {
    console.log(post);
    const company = post.company ? ` from ${post.company}` : '';

    this.name = post.name;
    this.email = post.email;
    this.message = post.message;

    this.item = {
      name: this.name,
      email: this.email,
      message: this.message,
      html: '<p>You were contacted from Jupiter and the Giraffe\'s website by ' + this.name + company + '.</p>' +
      '<p>They said... </br></br>"' + this.message + '".</p>' +
      '<p>You can contact them back on ' + this.email + '</p>',
      date: Date()
    };

    if(!isDevMode()) {
      this.itemRef.push(this.item);
    }
  }
}
