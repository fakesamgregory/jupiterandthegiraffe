import { TestBed, inject } from '@angular/core/testing';

import { WordpressService } from './wordpress.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WordpressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordpressService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([WordpressService], (service: WordpressService) => {
    expect(service).toBeTruthy();
  }));
});
