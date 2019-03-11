import { of } from 'rxjs';

export class MockWordpressService {
  getPageId() {
    return of({});
  }

  getPostType() {
    return of([]);
  }

  getPosts() {
    return of([]);
  }
}
