import { WINDOW } from '@ng-toolkit/universal';
import { Component, Input, ViewEncapsulation, HostListener , Inject} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent {
  @Input() public title: string;
  @Input() public buttonText: string;
  @Input() public description: string;
   show = false;
 constructor(@Inject(WINDOW) private window: Window) {}


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
