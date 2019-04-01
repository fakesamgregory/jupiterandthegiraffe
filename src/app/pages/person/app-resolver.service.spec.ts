import { TestBed, inject } from '@angular/core/testing';

import { AppResolverService } from './app-resolver.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppResolverService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
  });

  it('should be created', inject([AppResolverService], (service: AppResolverService) => {
    expect(service).toBeTruthy();
  }));
});
