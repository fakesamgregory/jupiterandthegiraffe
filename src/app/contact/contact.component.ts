import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import * as firebase from 'firebase/app';

export interface Item { name: string; email: string; message: string; html: string; date: string }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public rForm: FormGroup;
  public post: any;
  public message: string = '';
  public name: string = '';
  public company: string = '';
  public email: string = '';
  // public captcha: string;
  itemRef: AngularFireList<any>;
  item;

  constructor(private fb: FormBuilder, public db: AngularFireDatabase) {
    this.createForm();
    // this.itemRef = db.object('messages');
    this.itemRef = db.list('messages');
    this.item = this.itemRef.valueChanges();
  }

  createForm() {
    this.rForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      message: [null, Validators.compose([Validators.required, Validators.minLength(15)])],
      validate: ''
    });
  }

  sendMessage(post) {
    // this.captcha = post.reCapture;

    this.name = post.name;
    this.email = post.email;
    this.message = post.message;
    this.company = post.company;
    const company = post.company ? ` from ${post.company}` : '';

    const item: Item = {
      name: post.name,
      email: post.email,
      message: post.message,
      html: `You were contacted from JupiterandtheGiraffe's website by ${post.name}${company}. They said "${post.message}". You can contact them back on ${post.email}`,
      date: Date()
    };

    this.itemRef.push(item);
  }
}
