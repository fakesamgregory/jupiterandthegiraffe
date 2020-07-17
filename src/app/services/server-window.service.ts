import {Injectable} from '@angular/core';
import {WindowService} from './window.service';

@Injectable()
export class ServerWindowService extends WindowService {
  getWidth(): number {
    return 0;
  }
}
