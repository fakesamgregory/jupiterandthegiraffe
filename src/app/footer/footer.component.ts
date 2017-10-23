import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import '../../assets/images/giraffe.png';
import '../../assets/images/giraffe@2x.png';

@Component({
  selector: 'page-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
   brands = [];
   otherStuff = [
    { url: 'events', name: 'Search Engine Optimisation' },
    { url: 'events', name: 'Wordpress Websites' },
    { url: 'events', name: 'Front-End Websites' },
    { url: 'events', name: 'Print/Digital Design' },
    { url: 'events', name: 'Video/Promo Production' }
  ];

   general = [
    { url: 'work', name: 'Our work', class: 'footer__general-item' },
    { url: 'who-we-are', name: 'About', class: 'footer__general-item' },
    { url: '/sitemap.xml', name: 'Sitemap', class: 'footer__general-item' },
    { name: '© 2016 Jupiter and the Giraffe', class: 'pull-right' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('/assets/json/friends.json')
      .subscribe(data => this.brands = data['friends']);
  }
}
