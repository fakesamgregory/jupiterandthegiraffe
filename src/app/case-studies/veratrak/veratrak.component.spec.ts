import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { VeratrakComponent } from './veratrak.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialComponent} from '../../global/social/social.component';

describe('VeratrakComponent', () => {
  let component: VeratrakComponent;
  let fixture: ComponentFixture<VeratrakComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeratrakComponent, GetInTouchComponent, SocialComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeratrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
