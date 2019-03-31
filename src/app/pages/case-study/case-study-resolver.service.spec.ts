import { TestBed, inject } from '@angular/core/testing';

import { CaseStudyResolverService } from './case-study-resolver.service';

describe('CaseStudyResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseStudyResolverService]
    });
  });

  it('should be created', inject([CaseStudyResolverService], (service: CaseStudyResolverService) => {
    expect(service).toBeTruthy();
  }));
});
