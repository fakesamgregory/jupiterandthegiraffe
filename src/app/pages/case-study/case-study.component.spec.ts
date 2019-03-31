import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoombocsComponent } from './case-study.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';

describe('BoombocsComponent', () => {
  let component: BoombocsComponent;
  let fixture: ComponentFixture<BoombocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoombocsComponent, GetInTouchComponent, SocialComponent ],
      imports: [RouterTestingModule]
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
