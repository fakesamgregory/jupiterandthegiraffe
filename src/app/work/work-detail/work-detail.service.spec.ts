import { TestBed, inject } from '@angular/core/testing';

import { WorkDetailService } from './work-detail.service';

describe('WorkDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkDetailService]
    });
  });

  it('should be created', inject([WorkDetailService], (service: WorkDetailService) => {
    expect(service).toBeTruthy();
  }));
});
