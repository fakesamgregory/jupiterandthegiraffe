import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBuildAnEffectiveBrandComponent } from './how-to-build-an-effective-brand.component';

describe('HowToBuildAnEffectiveBrandComponent', () => {
  let component: HowToBuildAnEffectiveBrandComponent;
  let fixture: ComponentFixture<HowToBuildAnEffectiveBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToBuildAnEffectiveBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToBuildAnEffectiveBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
