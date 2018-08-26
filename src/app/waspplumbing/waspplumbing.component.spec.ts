import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaspplumbingComponent } from './waspplumbing.component';
import {HttpClientModule} from '@angular/common/http';
import {FormatDataService} from '../format-data.service';

describe('WaspplumbingComponent', () => {
  let component: WaspplumbingComponent;
  let fixture: ComponentFixture<WaspplumbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ WaspplumbingComponent ],
      providers: [FormatDataService]
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
