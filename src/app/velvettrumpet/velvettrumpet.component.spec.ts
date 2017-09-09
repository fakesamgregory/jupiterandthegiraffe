import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelvettrumpetComponent } from './velvettrumpet.component';

describe('VelvettrumpetComponent', () => {
  let component: VelvettrumpetComponent;
  let fixture: ComponentFixture<VelvettrumpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelvettrumpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelvettrumpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
