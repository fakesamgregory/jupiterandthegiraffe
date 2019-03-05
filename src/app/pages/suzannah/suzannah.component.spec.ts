import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuzannahComponent } from './suzannah.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';

describe('SuzannahComponent', () => {
  let component: SuzannahComponent;
  let fixture: ComponentFixture<SuzannahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuzannahComponent, GetInTouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuzannahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
