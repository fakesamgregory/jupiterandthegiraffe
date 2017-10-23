import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RathergoodComponent } from './rathergood.component';

describe('RathergoodComponent', () => {
  let component: RathergoodComponent;
  let fixture: ComponentFixture<RathergoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RathergoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RathergoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
