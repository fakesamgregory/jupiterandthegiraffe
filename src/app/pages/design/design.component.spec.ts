import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { DesignComponent } from './design.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';

describe('DesignComponent', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
