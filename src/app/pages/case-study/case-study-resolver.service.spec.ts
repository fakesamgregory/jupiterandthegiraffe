import { TestBed, inject } from '@angular/core/testing';

import { CaseStudyResolverService } from './case-study-resolver.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('CaseStudyResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseStudyResolverService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
  });

  it('should be created', inject([CaseStudyResolverService], (service: CaseStudyResolverService) => {
    expect(service).toBeTruthy();
  }));
});
