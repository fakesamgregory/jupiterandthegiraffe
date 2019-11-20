import { TestBed, inject } from '@angular/core/testing';

import { CaseStudiesService } from './case-studies-store.service';

describe('CaseStudiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseStudiesService]
    });
  });

  it('should be created', inject([CaseStudiesService], (service: CaseStudiesService) => {
    expect(service).toBeTruthy();
  }));
});
