import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MVPPackageComponent } from './mvp-package.component';

describe('MVPPackageComponent', () => {
  let component: MVPPackageComponent;
  let fixture: ComponentFixture<MVPPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MVPPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MVPPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
