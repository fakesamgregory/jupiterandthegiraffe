import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DotsComponent} from '../dots/dots.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponent, DotsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: Observable.of({work: 'hello'}) }
        }
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
