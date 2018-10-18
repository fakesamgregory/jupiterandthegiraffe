import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-friends-component',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public friends: Array<Object>;
  private postsUrl = 'assets/json/friends.json';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.postsUrl)
      .subscribe((data: Object) => {
        this.friends = data['friends'];
      });
  }
}
