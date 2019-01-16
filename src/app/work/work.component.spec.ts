import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { WorkComponent } from './work.component';
import {ActivatedRoute} from '@angular/router';
import { of } from 'rxjs';

import {DotsComponent} from '../dots/dots.component';
import {GetInTouchComponent} from '../get-in-touch/get-in-touch.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkComponent, DotsComponent, GetInTouchComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({work: 'hello'}) }
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
