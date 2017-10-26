import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import '../../../assets/images/velvettrumpet.png';
import '../../../assets/images/velvettrumpet@2x.png';

import '../../../assets/images/emdadrashid.png';
import '../../../assets/images/emdadrashid@2x.png';

import '../../../assets/images/waspplumbing.png';
import '../../../assets/images/waspplumbing@2x.png';

@Component({
  selector: 'friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public friends: Array<Object>;
  private postsUrl: string = '/assets/json/friends.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.postsUrl)
      .subscribe((data: Object) => {
        this.friends = data['friends'];
      });
  }
}
