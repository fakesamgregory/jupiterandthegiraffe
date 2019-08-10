import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss']
})
export class SignupPopupComponent implements OnInit {
  public showDialog = false;
  public showPrompt = false;

  constructor(@Inject(WINDOW) private window: Window) {

  }

  public closePrompt() {
    this.showPrompt = false;
  }

  public toggleDialog(e) {
    if (e) {
      e.preventDefault();
    }

    this.showDialog = !this.showDialog;
  }

  ngOnInit() {
    this.window.setTimeout(() => {
      this.showPrompt = true;
    }, 5000)
  }

}
