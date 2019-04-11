import { TestBed, inject } from '@angular/core/testing';

import { ServiceResolverComponent } from './service-resolver.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('ServiceResolverComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceResolverComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
  });

  it('should be created', inject([ServiceResolverComponent], (service: ServiceResolverComponent) => {
    expect(service).toBeTruthy();
  }));
});
