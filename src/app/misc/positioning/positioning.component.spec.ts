import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositioningComponent } from './positioning.component';
import {BackButtonComponent} from '../../global/back-button/back-button.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialComponent} from '../../global/social/social.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';

describe('PositioningComponent', () => {
  let component: PositioningComponent;
  let fixture: ComponentFixture<PositioningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositioningComponent, BackButtonComponent, SocialComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
