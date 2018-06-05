import { async, TestBed } from '@angular/core/testing';

import { VeratrakComponent } from './veratrak.component';

describe('VeratrakComponent', () => {
  const COMPONENT: VeratrakComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeratrakComponent ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    expect(COMPONENT).toBeTruthy();
  });
});
