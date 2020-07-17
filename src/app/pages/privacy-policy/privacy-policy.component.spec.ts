import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowRef } from 'src/app/services/window.service';

import { PrivacyPolicyComponent } from './privacy-policy.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialComponent} from '../../global/social/social.component';

describe('PrivacyPolicyComponent', () => {
  let component: PrivacyPolicyComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyComponent, GetInTouchComponent, SocialComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {provide: WindowRef, useValue: { location: { href: 'this/url'}}},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
