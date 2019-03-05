import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuelComponent } from './samuel.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';

describe('SamuelComponent', () => {
  let component: SamuelComponent;
  let fixture: ComponentFixture<SamuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamuelComponent, GetInTouchComponent, SocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
