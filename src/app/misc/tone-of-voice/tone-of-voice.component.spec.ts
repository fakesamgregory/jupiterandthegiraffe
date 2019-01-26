import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneOfVoiceComponent } from './tone-of-voice.component';

describe('ToneOfVoiceComponent', () => {
  let component: ToneOfVoiceComponent;
  let fixture: ComponentFixture<ToneOfVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneOfVoiceComponent ]
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
