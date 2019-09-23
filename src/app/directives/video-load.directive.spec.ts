import { VideoLoadDirective } from './video-load.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('VideoLoadDirective', () => {
  it('should create an instance', () => {
    const directive = new VideoLoadDirective(ElementRef as any, Renderer2 as any);
    expect(directive).toBeTruthy();
  });
});
