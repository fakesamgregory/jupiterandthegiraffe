import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowRef } from 'src/app/services/window.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

import { CaseStudyComponent } from './case-study.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BackButtonComponent} from '../../global/back-button/back-button.component';

describe('CaseStudyComponent', () => {
  let component: CaseStudyComponent;
  let fixture: ComponentFixture<CaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudyComponent, GetInTouchComponent, SocialComponent, BackButtonComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {provide: WindowRef, useValue: { location: { href: 'this/url'}}},
        { provide: ActivatedRoute, useValue: {
          data: of({
            work: [{
              _embedded: {
                'wp:featuredmedia': [
                  { source_url: ''}
                ]
              },
              acf: {
                title: 'title'
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
    fixture = TestBed.createComponent(CaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
