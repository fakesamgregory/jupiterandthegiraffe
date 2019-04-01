import { TestBed, inject } from '@angular/core/testing';

import { WorkResolverService } from './work-resolver.service';
import {DataService} from '../../data.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('WorkResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [WorkResolverService, DataService]
    });
  });

  it('should be created', inject([WorkResolverService], (service: WorkResolverService) => {
    expect(service).toBeTruthy();
  }));
});
