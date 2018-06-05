import { TestBed, inject } from '@angular/core/testing';

import { WorkResolverService } from './work-resolver.service';
import {DataService} from '../data.service';
import {HttpClientModule} from '@angular/common/http';

describe('WorkResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WorkResolverService, DataService]
    });
  });

  it('should be created', inject([WorkResolverService], (service: WorkResolverService) => {
    expect(service).toBeTruthy();
  }));
});
