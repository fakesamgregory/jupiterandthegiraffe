import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import '../../assets/images/giraffe.png';
import '../../assets/images/giraffe@2x.png';

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
    {url: '/terms-and-conditions', name: 'Terms and Conditions', class: 'footer__general-item'}
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get('/assets/json/friends.json')
      .subscribe(data => this.brands = data['friends']);
  }
}
