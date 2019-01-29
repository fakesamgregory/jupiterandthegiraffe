import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentComponent } from './web-development.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('WebDevelopmentComponent', () => {
  let component: WebDevelopmentComponent;
  let fixture: ComponentFixture<WebDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDevelopmentComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
