import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeratrakComponent } from './veratrak.component';

describe('VeratrakComponent', () => {
  let component: VeratrakComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeratrakComponent ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
