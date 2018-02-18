// import {Directive, OnInit, AfterViewInit, Input, ElementRef, NgZone, Injector} from '@angular/core';
// import {ControlValueAccessor, FormControl, NgControl, Validators} from '@angular/forms';
//
// export interface ReCaptchaConfig {
//   theme?: 'dark' | 'light';
//   type?: 'audio' | 'image';
//   size?: 'compact' | 'normal';
//   tabindex?: number;
// }
//
// declare const grecaptcha: any;
// declare global {
//   interface Window {
//     grecaptcha: any;
//     reCaptchaLoad: () => void;
//   }
// }
//
// @Directive({
//   selector: '[nbRecaptcha]'
// })
// export class NbRecaptchaDirective implements OnInit, AfterViewInit, ControlValueAccessor {
//   @Input() key: string;
//   @Input() config: ReCaptchaConfig = {};
//   @Input() lang: string;
//
//   private widgetId: number;
//   private control: FormControl;
//
//   constructor( private element: ElementRef, private  ngZone: NgZone, private injector: Injector ) { }
//
//   ngOnInit() {
//     this.registerReCaptchaCallback();
//     this.addScript();
//   }
//
//   ngAfterViewInit() {
//     this.control = this.injector.get(NgControl).control;
//     this.setValidator();
//   }
//
//   private setValidator() {
//     this.control.setValidators(Validators.required);
//     this.control.updateValueAndValidity();
//   }
//
//   writeValue(obj: any ): void { }
//
//   registerOnChange( fn: any ): void {
//     this.onChange = fn;
//   }
//
//   registerOnTouched( fn: any ): void {
//     this.onTouched = fn;
//   }
//
//   registerReCaptchaCallback() {
//     window.reCaptchaLoad = () => {
//       const config = {
//         ...this.config,
//         'sitekey': this.key,
//         'callback': this.onSuccess.bind(this),
//         'expired-callback': this.onExpired.bind(this)
//       };
//       this.widgetId = this.render(this.element.nativeElement, config);
//     };
//   }
//
//   private render(element: HTMLElement, config ): number {
//     return grecaptcha.render(element, config);
//   }
//
//   addScript() {
//     const script = document.createElement('script');
//     const lang = this.lang ? '&hl=' + this.lang : '';
//     script.src = `https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit${lang}`;
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//   }
//
//   onExpired() {
//     this.ngZone.run(() => {
//       this.onChange(null);
//       this.onTouched(null);
//     });
//   }
//
//   onSuccess(token: string ) {
//     this.ngZone.run(() => {
//       this.onChange(token);
//       this.onTouched(token);
//     });
//   }
//
// }
