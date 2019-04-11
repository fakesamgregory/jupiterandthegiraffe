import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDesignComponent } from './website-design.component';

describe('WebsiteDesignComponent', () => {
  let component: WebsiteDesignComponent;
  let fixture: ComponentFixture<WebsiteDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
