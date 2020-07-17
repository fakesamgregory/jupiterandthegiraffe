import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsComponent } from './stars.component';
import {ParallaxDirective} from '../../directives/parallax.directive';
import { WindowRef } from 'src/app/services/window.service';

describe('StarsComponent', () => {
  let component: StarsComponent;
  let fixture: ComponentFixture<StarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsComponent, ParallaxDirective ],
      providers: [
        {provide: WINDOW},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
