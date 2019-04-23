import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WINDOW} from '@ng-toolkit/universal';

import { WebsiteDevelopmentComponent } from './website-development.component';
import {BackButtonComponent} from '../../global/back-button/back-button.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';

describe('WebsiteDevelopmentComponent', () => {
  let component: WebsiteDevelopmentComponent;
  let fixture: ComponentFixture<WebsiteDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteDevelopmentComponent, BackButtonComponent, GetInTouchComponent, SocialComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: WINDOW, useValue: { location: { href: 'this/url'}}},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
