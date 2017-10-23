import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarkComponent } from './hark.component';

describe('HarkComponent', () => {
  let component: HarkComponent;
  let fixture: ComponentFixture<HarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
