import { TestBed, inject } from '@angular/core/testing';

import { WorkDetailService } from './work-detail.service';
import {DataService} from '../../../data.service';
import {HttpClientModule} from '@angular/common/http';

describe('WorkDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WorkDetailService, DataService]
    });
  });

  it('should be created', inject([WorkDetailService], (service: WorkDetailService) => {
    expect(service).toBeTruthy();
  }));
});
