import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelvettrumpetComponent } from './velvettrumpet.component';
import {HttpClientModule} from '@angular/common/http';
import {FormatDataService} from '../format-data.service';

describe('VelvettrumpetComponent', () => {
  let component: VelvettrumpetComponent;
  let fixture: ComponentFixture<VelvettrumpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VelvettrumpetComponent ],
      providers: [FormatDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelvettrumpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
