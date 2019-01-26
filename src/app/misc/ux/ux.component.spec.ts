import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxComponent } from './ux.component';

describe('UxComponent', () => {
  let component: UxComponent;
  let fixture: ComponentFixture<UxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
