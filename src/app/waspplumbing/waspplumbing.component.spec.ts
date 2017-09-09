import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaspplumbingComponent } from './waspplumbing.component';

describe('WaspplumbingComponent', () => {
  let component: WaspplumbingComponent;
  let fixture: ComponentFixture<WaspplumbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaspplumbingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaspplumbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
