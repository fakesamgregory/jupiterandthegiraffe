import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { EpochBrandWebsiteComponent } from './epoch-brand-website.component';

describe('EpochBrandWebsiteComponent', () => {
  let component: EpochBrandWebsiteComponent;
  let fixture: ComponentFixture<EpochBrandWebsiteComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpochBrandWebsiteComponent ]
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
