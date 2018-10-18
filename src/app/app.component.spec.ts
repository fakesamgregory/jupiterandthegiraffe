// import { TestBed, async } from '@angular/core/testing';
// import {WINDOW} from '@ng-toolkit/universal';
//
// import { AosToken, aos } from './aos';
// import { AppComponent } from './app.component';
// import {StarsComponent} from './stars/stars.component';
// import {FooterComponent} from './footer/footer.component';
// import {HeroComponent} from './hero/hero.component';
// import {RouterTestingModule} from '@angular/router/testing';
// import {HeaderComponent} from './header/header.component';
// import {TrustHtmlPipe} from './trust-html.pipe';
// import {LogoComponent} from './logo/logo.component';
// import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
// import {HttpClientModule} from '@angular/common/http';
// import {Angulartics2, RouterlessTracking} from 'angulartics2';
//
// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//         StarsComponent,
//         FooterComponent,
//         HeroComponent,
//         HeaderComponent,
//         TrustHtmlPipe,
//         LogoComponent
//       ],
//       imports: [ RouterTestingModule, HttpClientModule ],
//       providers: [
//         {provide: WINDOW},
//         {provide: Angulartics2, useValue: {}},
//         {provide: Angulartics2GoogleAnalytics, useValue: {}},
//         Angulartics2GoogleAnalytics,
//         { provide: AosToken, useValue: aos },
//         RouterlessTracking]
//     }).compileComponents();
//   }));
//
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
// });
