import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdadComponent } from './emdad.component';

describe('EmdadComponent', () => {
  let component: EmdadComponent;
  let fixture: ComponentFixture<EmdadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
