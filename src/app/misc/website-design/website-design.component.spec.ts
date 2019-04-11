import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDesignComponent } from './website-design.component';
import {BackButtonComponent} from '../../global/back-button/back-button.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';

describe('WebsiteDesignComponent', () => {
  let component: WebsiteDesignComponent;
  let fixture: ComponentFixture<WebsiteDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteDesignComponent, BackButtonComponent, GetInTouchComponent, SocialComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
