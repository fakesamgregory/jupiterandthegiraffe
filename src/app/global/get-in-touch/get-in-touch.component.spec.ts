import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInTouchComponent } from './get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialComponent} from '../social/social.component';

describe('GetInTouchComponent', () => {
  let component: GetInTouchComponent;
  let fixture: ComponentFixture<GetInTouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInTouchComponent, SocialComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
