import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreComponent } from './we-are.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('WeAreComponent', () => {
  let component: WeAreComponent;
  let fixture: ComponentFixture<WeAreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeAreComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});
