import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdadComponent } from './emdad.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {FormatDataService} from '../format-data.service';

describe('EmdadComponent', () => {
  let component: EmdadComponent;
  let fixture: ComponentFixture<EmdadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdadComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [FormatDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
