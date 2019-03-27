import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';
import {SocialComponent} from '../../global/social/social.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComponent, GetInTouchComponent, SocialComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: {
          data: of({
            person: [{
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
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
