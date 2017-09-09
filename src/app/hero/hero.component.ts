import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() home: boolean = false;
  dialogTitle: string = 'Contact Details';
  dialogDescription: string = `
      <p>
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span class="hidden-xs-down">(+44) 7816 061 943</span>
          <a href="tel:+447816061943" class="hidden-sm-up">(+44) 7816 061 943</a>
      </p>
      <p>
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <a href="mail:salam@juniperandthegiraffe.com">salam@jupiterandthegiraffe.com</a>
      </p>
  `;
  dialogButtonText: string = 'Contact Us'
  homePage: boolean;

  constructor () {

  }
}
