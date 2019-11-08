import {Component} from '@angular/core';
import { HighlightedFriendsService } from 'src/app/stores/highlighted-friends.service';

@Component({
  selector: 'app-friends-component',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {
  constructor(
    public highlightedFriendStore: HighlightedFriendsService
  ) {}

  public makeUrl(content: string): string {
    return `/${content.replace(/(<([^>]+)>)/ig, '').trim()}`;
  }
}
