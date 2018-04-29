import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RathergoodComponent } from './rathergood.component';
import {FormatDataService} from "../format-data.service";
import {HttpClientModule} from "@angular/common/http";

describe('RathergoodComponent', () => {
  let component: RathergoodComponent;
  let fixture: ComponentFixture<RathergoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ RathergoodComponent ],
      providers: [FormatDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RathergoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
