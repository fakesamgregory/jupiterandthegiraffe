import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-toolkit/universal';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-tone-of-voice',
  templateUrl: './tone-of-voice.component.html',
  styleUrls: ['./tone-of-voice.component.scss']
})
export class ToneOfVoiceComponent {

  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(WINDOW) private window: Window,
              @Inject(PLATFORM_ID) private platformId: any) {
    const TITLE = 'Tone of voice | Brand Identity | Jupiter and the Giraffe';
    const DESC =
      'Simply put, tone of voice is the personality of anything your company says. This can range for excitable to serious. ' +
      'Jupiter and the Giraffes tone of voice, for instance, is casual, quirky and personable (now you can\'t unsee it, right?)';

    this.titleService.setTitle(TITLE);

    this.meta.updateTag({
      property: 'og:description',
      content: DESC,
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: TITLE,
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: DESC,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: TITLE,
    });
    if (isPlatformBrowser(this.platformId)) {
      this.meta.updateTag({
        property: 'og:url',
        content: this.window.location.href,
      });
    }
  }

}
