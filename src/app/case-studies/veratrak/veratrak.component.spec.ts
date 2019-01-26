import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { VeratrakComponent } from './veratrak.component';
import {GetInTouchComponent} from '../../get-in-touch/get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('VeratrakComponent', () => {
  let component: VeratrakComponent;
  let fixture: ComponentFixture<VeratrakComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeratrakComponent, GetInTouchComponent ],
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
