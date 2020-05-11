import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public show: boolean;
  @Input() public menuOpen: boolean;
  @Input() public funnel: boolean;
  @Input() public home: boolean;
  @Output() toggleMenu = new EventEmitter();
  @Output() scrollTo = new EventEmitter();

  constructor() { }

  onClick(): void {
    this.toggleMenu.emit(undefined);
  }

  scroll(e): void {
    this.scrollTo.emit(e);
  }
}
