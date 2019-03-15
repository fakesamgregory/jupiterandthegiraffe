import {Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

interface MailchimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-email-popup',
  templateUrl: './email-popup.component.html',
  styleUrls: ['./email-popup.component.scss']
})
export class EmailPopupComponent implements OnDestroy {
  @Input() windowClose: object;
  public emailSignup: FormGroup;
  public submitted = null;
  public sending = false;
  private timeout = null;
  public error = '';
  private emailSignupUrl =
    '//jupiterandthegiraffe.us20.list-manage.com/subscribe/post-json?u=c25f6fc2b7f38aa344e8d5b4a&amp;id=467e3cb96c';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.createForm();
  }

  ngOnDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  createForm() {
    this.emailSignup = this.fb.group({
      MERGE0: ['', Validators.compose([Validators.required, Validators.email])],
      b_name: [''],
      b_email: [''],
      b_comment: [''],
    });
  }

  sendForm(post) {
    if (!post.b_name && !post.b_email && !post.b_comment) {
      this.sending = true;

      this.timeout = setTimeout(() => {
        let url = `${this.emailSignupUrl}`;

        Object.keys(post).forEach(item => {
          if (post[item]) {
            url += `&${item}=${post[item]}`;
          }
        });

        this.http.jsonp(url, 'c')
          .subscribe((response: MailchimpResponse) => {
            this.sending = false;
            if (response.result && response.result !== 'error') {
              this.submitted = response;
            } else {
              this.error = response.msg;
            }
          }, error => {
            this.sending = false;
            this.error = 'Sorry, an error occurred.';
          });
      }, 1000);
    }
  }
}
