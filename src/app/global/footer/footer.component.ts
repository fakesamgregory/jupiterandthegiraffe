import {Component, Input} from '@angular/core';

import {HighlightedFriendsService} from '../../stores/highlighted-friends.service';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() services: Array<any>;
  public showMyElement = false;
  public general = [
    {url: '/work', name: 'Our work', class: 'footer__general-item'},
    {url: '/contact', name: 'Work With Us', class: 'footer__general-item'},
    {url: '/terms-and-conditions', name: 'Terms and Conditions', class: 'footer__general-item'},
    {url: '/privacy-policy', name: 'Privacy Policy', class: 'footer__general-item'}
  ];
  public today = Date.now();

  constructor(public highlightedFriendStore: HighlightedFriendsService) { }
}
