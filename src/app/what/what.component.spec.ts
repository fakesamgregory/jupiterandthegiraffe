import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatComponent } from './what.component';
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {DotsComponent} from "../dots/dots.component";

describe('WhatComponent', () => {
  let component: WhatComponent;
  let fixture: ComponentFixture<WhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatComponent, DotsComponent ],
      imports: [RouterModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
