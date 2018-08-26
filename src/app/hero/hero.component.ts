import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() home = false;
  dialogTitle = 'Contact Details';
  dialogDescription = `
      <p>
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span class="hidden-sm">(+44) 7816 061 943</span>
          <a href="tel:+447816061943" class="hidden-sm-up">(+44) 7816 061 943</a>
      </p>
      <p>
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <a href="mailto:salam@jupiterandthegiraffe.com">salam@jupiterandthegiraffe.com</a>
      </p>
  `;
  dialogButtonText = 'Contact Us';
  homePage: boolean;

  constructor () { }
}
