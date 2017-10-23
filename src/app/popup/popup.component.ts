import { Component, Input, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'pop-up',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent {
  @Input() public title: string;
  @Input() public buttonText: string;
  @Input() public description: string;
   show = false;

  showDialog(target: boolean) {
    this.show = target;
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.showDialog(false);
    }
  }
}
