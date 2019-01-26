import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthstarComponent } from './northstar.component';
import {GetInTouchComponent} from '../get-in-touch/get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('NorthstarComponent', () => {
  let component: NorthstarComponent;
  let fixture: ComponentFixture<NorthstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthstarComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
