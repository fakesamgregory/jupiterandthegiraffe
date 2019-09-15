import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {
  @Input() className: string;

  constructor(private location: Location) { }

  goBack($event): void {
    $event.preventDefault();
    this.location.back();
  }
}
