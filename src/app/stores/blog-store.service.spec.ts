import { TestBed, inject } from '@angular/core/testing';

import { BlogStoreService } from './blog-store.service';

describe('BlogStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogStoreService]
    });
  });

  it('should be created', inject([BlogStoreService], (service: BlogStoreService) => {
    expect(service).toBeTruthy();
  }));
});
