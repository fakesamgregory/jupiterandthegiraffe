import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowRef } from 'src/app/services/window.service';

import { WhoComponent } from './who.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialComponent} from '../../global/social/social.component';
import {WordpressService} from '../../services/wordpress.service';
import {MockWordpressService} from '../../services/wordpress.mockservice';

describe('WhoComponent', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoComponent, GetInTouchComponent, SocialComponent],
      imports: [ RouterTestingModule ],
      providers: [
        {provide: WindowRef, useValue: { location: { href: 'this/url'}}},
        { provide: WordpressService, useClass: MockWordpressService }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
