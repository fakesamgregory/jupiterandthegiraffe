import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoombocsComponent } from './boombocs.component';
import {RouterTestingModule} from '@angular/router/testing';
import {GetInTouchComponent} from '../get-in-touch/get-in-touch.component';

describe('BoombocsComponent', () => {
  let component: BoombocsComponent;
  let fixture: ComponentFixture<BoombocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoombocsComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoombocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
