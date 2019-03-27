import { TestBed, inject } from '@angular/core/testing';

import { PageResolverService } from './page-resolver.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PageResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageResolverService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
  });

  it('should be created', inject([PageResolverService], (service: PageResolverService) => {
    expect(service).toBeTruthy();
  }));
});
