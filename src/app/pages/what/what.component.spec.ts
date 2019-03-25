import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatComponent } from './what.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {DotsComponent} from '../../global/dots/dots.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';
import {BackButtonComponent} from '../../global/back-button/back-button.component';
import {WINDOW} from '@ng-toolkit/universal';

describe('WhatComponent', () => {
  let component: WhatComponent;
  let fixture: ComponentFixture<WhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatComponent, DotsComponent, GetInTouchComponent, SocialComponent, BackButtonComponent ],
      imports: [RouterModule, RouterTestingModule],
      providers: [
        {provide: WINDOW},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
