import {Component, PLATFORM_ID} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { ParallaxDirective } from './parallax.directive';
import { WindowRef } from 'src/app/services/window.service';

@Component({
  template: `<div appParallax [ratio]='.02'></div>`
})
class TestParallaxDirectiveComponent {
}

describe('ParallaxDirective', () => {
  let component: TestParallaxDirectiveComponent;
  let fixture: ComponentFixture<TestParallaxDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestParallaxDirectiveComponent, ParallaxDirective],
      providers: [
        {provide: WindowRef},
      ]
    });
    fixture = TestBed.createComponent(TestParallaxDirectiveComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new TestParallaxDirectiveComponent();
    expect(directive).toBeTruthy();
  });
});
