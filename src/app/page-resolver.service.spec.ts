import { TestBed, inject } from '@angular/core/testing';

import { PageResolverService } from './page-resolver.service';

describe('PageResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageResolverService]
    });
  });

  it('should be created', inject([PageResolverService], (service: PageResolverService) => {
    expect(service).toBeTruthy();
  }));
});
