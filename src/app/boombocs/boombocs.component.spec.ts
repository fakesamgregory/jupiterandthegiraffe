import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoombocsComponent } from './boombocs.component';

describe('BoombocsComponent', () => {
  let component: BoombocsComponent;
  let fixture: ComponentFixture<BoombocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoombocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoombocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
