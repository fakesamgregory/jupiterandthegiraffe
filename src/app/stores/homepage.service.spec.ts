import { TestBed, inject } from '@angular/core/testing';

import { HomepageService } from './homepage-store.service';

describe('HomepageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomepageService]
    });
  });

  it('should be created', inject([HomepageService], (service: HomepageService) => {
    expect(service).toBeTruthy();
  }));
});
