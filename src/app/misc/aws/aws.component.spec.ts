import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { AwsComponent } from './aws.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';

describe('AwsComponent', () => {
  let component: AwsComponent;
  let fixture: ComponentFixture<AwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsComponent, GetInTouchComponent, SocialComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
