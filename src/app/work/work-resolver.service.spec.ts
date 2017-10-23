import { TestBed, inject } from '@angular/core/testing';

import { WorkResolverService } from './work-resolver.service';

describe('WorkResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkResolverService]
    });
  });

  it('should be created', inject([WorkResolverService], (service: WorkResolverService) => {
    expect(service).toBeTruthy();
  }));
});
