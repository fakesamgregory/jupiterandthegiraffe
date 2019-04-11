import { TestBed, inject } from '@angular/core/testing';

import { WorkStoreService } from './work-store.service';

describe('WorkStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkStoreService]
    });
  });

  it('should be created', inject([WorkStoreService], (service: WorkStoreService) => {
    expect(service).toBeTruthy();
  }));
});
