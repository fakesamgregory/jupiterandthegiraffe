import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  @Input() className: string;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

}
