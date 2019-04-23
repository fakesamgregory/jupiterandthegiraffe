import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { WorkComponent } from './work.component';
import {ActivatedRoute} from '@angular/router';
import { of } from 'rxjs';
import {WINDOW} from '@ng-toolkit/universal';

import {DotsComponent} from '../../global/dots/dots.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkComponent, DotsComponent, GetInTouchComponent, SocialComponent ],
      providers: [
        {provide: WINDOW, useValue: { location: { href: 'this/url'}}},
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              work: [{
                _embedded: {
                  'wp:featuredmedia': [
                    {source_url: ''}
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
              }]
            })
          }
        }
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
