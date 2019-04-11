import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightedFriendsService {
  private readonly _friends = new BehaviorSubject<any>([]);
  readonly friends$ = this._friends.asObservable();

  get friends(): any {
    return this._friends.getValue();
  }

  set friends(val: any) {
    this._friends.next(val);
  }

  addFriend(friend: any) {
    this.friends = [
      ...this.friends,
      ...friend
    ];
  }
}
