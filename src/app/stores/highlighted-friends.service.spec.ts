import { TestBed, inject } from '@angular/core/testing';

import { HighlightedFriendsService } from './highlighted-friends.service';

describe('HighlightedFriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighlightedFriendsService]
    });
  });

  it('should be created', inject([HighlightedFriendsService], (service: HighlightedFriendsService) => {
    expect(service).toBeTruthy();
  }));
});
