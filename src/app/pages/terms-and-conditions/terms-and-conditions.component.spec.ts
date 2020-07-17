import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import { WindowRef } from 'src/app/services/window.service';

import { TermsAndConditionsComponent } from './terms-and-conditions.component';

describe('TermsAndConditionsComponent', () => {
  let component: TermsAndConditionsComponent;
  let fixture: ComponentFixture<TermsAndConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsComponent ],
      providers: [
        { provide: WINDOW, useValue: { location: { href: 'this/url' } } },
        { provide: ActivatedRoute, useValue: {
          data: of({
            data: {
              title: {
                rendered: 'name'
              },
              content: {
                rendered: 'content'
              },
            },
          }),
          snapshot: {}
        }}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
