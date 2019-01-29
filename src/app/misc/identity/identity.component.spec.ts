import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { IdentityComponent } from './identity.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';

describe('IdentityComponent', () => {
  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
