import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { UxComponent } from './ux.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';

describe('UxComponent', () => {
  let component: UxComponent;
  let fixture: ComponentFixture<UxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
