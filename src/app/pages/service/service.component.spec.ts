import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import { WindowRef } from 'src/app/services/window.service';

import { ServiceComponent } from './service.component';
import {BackButtonComponent} from '../../global/back-button/back-button.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SocialComponent} from '../../global/social/social.component';

describe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceComponent, BackButtonComponent, GetInTouchComponent, SocialComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: WINDOW, useValue: { location: { href: 'this/url'}}},
        { provide: ActivatedRoute, useValue: {
          data: of({
            data: [{
              _embedded: {
                'wp:featuredmedia': [
                  { source_url: ''}
                ]
              },
              acf: {
                title: 'title',
                services: [
                  {link: '/this/link', service: 'this title'},
                ]
              },
              title: {
                rendered: 'name'
              },
              excerpt: {
                rendered: 'excerpt'
              },
              content: {
                rendered: 'content'
              },
            }],
          }),
          snapshot: {}
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
