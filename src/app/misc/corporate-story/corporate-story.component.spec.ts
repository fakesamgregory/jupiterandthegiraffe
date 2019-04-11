import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateStoryComponent } from './corporate-story.component';

describe('CorporateStoryComponent', () => {
  let component: CorporateStoryComponent;
  let fixture: ComponentFixture<CorporateStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
