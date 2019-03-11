import {Component, OnInit} from '@angular/core';

import 'assets/images/giraffe.png';
import 'assets/images/giraffe@2x.png';
import {WordpressService} from '../../services/wordpress.service';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  brands = [];
  general = [
    {url: '/work', name: 'Our work', class: 'footer__general-item'},
    {url: '/who-we-are', name: 'About', class: 'footer__general-item'},
    {url: '/contact', name: 'Work With Us', class: 'footer__general-item'},
    {url: '/terms-and-conditions', name: 'Terms and Conditions', class: 'footer__general-item'},
    {url: '/privacy-policy', name: 'Privacy Policy', class: 'footer__general-item'}
  ];
  today: number = Date.now();

  constructor(private wordpress: WordpressService) { }

  ngOnInit(): void {
    this.wordpress.getPostType('friends')
      .subscribe((friends: Array<any>) => {
        this.brands = friends.filter(friend => friend.excerpt.rendered);
      });
  }

  public makeUrl(content: string): string {
    return content.replace(/(<([^>]+)>)/ig, '').trim();
  }
}
