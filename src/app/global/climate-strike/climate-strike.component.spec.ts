import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateStrikeComponent } from './climate-strike.component';

describe('ClimateStrikeComponent', () => {
  let component: ClimateStrikeComponent;
  let fixture: ComponentFixture<ClimateStrikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimateStrikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateStrikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
