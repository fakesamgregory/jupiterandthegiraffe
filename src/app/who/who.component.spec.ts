import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoComponent } from './who.component';
import {GetInTouchComponent} from '../get-in-touch/get-in-touch.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('WhoComponent', () => {
  let component: WhoComponent;
  let fixture: ComponentFixture<WhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoComponent, GetInTouchComponent],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
