import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as AOS from '../node_modules/aos/dist/aos.js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

AOS.init({
  duration: 800
});

platformBrowserDynamic().bootstrapModule(AppModule);
