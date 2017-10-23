import { TestBed, inject } from '@angular/core/testing';

import { FormatDataService } from './format-data.service';

describe('FormatDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatDataService]
    });
  });

  it('should be created', inject([FormatDataService], (service: FormatDataService) => {
    expect(service).toBeTruthy();
  }));
});
