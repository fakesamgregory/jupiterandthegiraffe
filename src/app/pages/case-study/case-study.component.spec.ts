import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyComponent } from './case-study.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('CaseStudyComponent', () => {
  let component: CaseStudyComponent;
  let fixture: ComponentFixture<CaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudyComponent, GetInTouchComponent, SocialComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
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
