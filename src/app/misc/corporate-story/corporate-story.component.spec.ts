import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {WINDOW} from '@ng-toolkit/universal';

import { CorporateStoryComponent } from './corporate-story.component';
import {BackButtonComponent} from '../../global/back-button/back-button.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialComponent} from '../../global/social/social.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';

describe('CorporateStoryComponent', () => {
  let component: CorporateStoryComponent;
  let fixture: ComponentFixture<CorporateStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateStoryComponent, BackButtonComponent, SocialComponent, GetInTouchComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: WINDOW, useValue: { location: { href: 'this/url'}}},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
