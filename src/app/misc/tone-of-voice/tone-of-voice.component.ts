import { Component } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-tone-of-voice',
  templateUrl: './tone-of-voice.component.html',
  styleUrls: ['./tone-of-voice.component.scss']
})
export class ToneOfVoiceComponent {

  constructor(private meta: Meta, private titleService: Title) {
    const TITLE = 'Tone of voice';
    const DESC =
      'Simply put, tone of voice is the personality of anything your company says. This can range for excitable to serious. ' +
      'Jupiter and the Giraffes tone of voice, for instance, is casual, quirky and personable (now you can\'t unsee it, right?)';

    this.titleService.setTitle(TITLE);

    this.meta.updateTag({
      name: 'description',
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
      itemprop: 'name',
      content: TITLE,
    });
  }

}
