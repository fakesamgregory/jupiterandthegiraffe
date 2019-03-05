import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { CmsComponent } from './cms.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';

describe('CmsComponent', () => {
  let component: CmsComponent;
  let fixture: ComponentFixture<CmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsComponent, GetInTouchComponent, SocialComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
