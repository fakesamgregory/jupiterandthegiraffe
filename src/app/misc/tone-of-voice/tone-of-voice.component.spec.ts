import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { ToneOfVoiceComponent } from './tone-of-voice.component';
import {GetInTouchComponent} from '../../global/get-in-touch/get-in-touch.component';

describe('ToneOfVoiceComponent', () => {
  let component: ToneOfVoiceComponent;
  let fixture: ComponentFixture<ToneOfVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneOfVoiceComponent, GetInTouchComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneOfVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
