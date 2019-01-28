import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { EpochBrandWebsiteComponent } from './epoch-brand-website.component';
import {DotsComponent} from '../../global/dots/dots.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';

describe('EpochBrandWebsiteComponent', () => {
  let component: EpochBrandWebsiteComponent;
  let fixture: ComponentFixture<EpochBrandWebsiteComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpochBrandWebsiteComponent, DotsComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpochBrandWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
