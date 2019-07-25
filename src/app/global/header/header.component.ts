import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public show: boolean;
  @Input() public menuOpen: boolean;
  @Output() toggleMenu = new EventEmitter();

  constructor() { }

  onClick() {
    this.toggleMenu.emit(undefined);
  }
}
