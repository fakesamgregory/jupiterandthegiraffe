import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public show: boolean;

  constructor() {  }
}
