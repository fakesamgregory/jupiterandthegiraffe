// aos.ts
import * as animateOnScroll from 'aos';
import { InjectionToken } from '@angular/core';

export const aos = animateOnScroll;
// This makes it possible to refer to AOS in Angular, see below
export const AosToken = new InjectionToken('AOS');
