import { of } from 'rxjs';

const defaults = {
  acf: {
    featured_friends: [
      { friends: { post_type: '', ID: 1 } }
    ]
  },
  _embedded: {
    'wp:featuredmedia': [
      {
        source_url: '',
        media_details: {
          sizes: {
            medium: {
              source_url: ''
            }
          }
        }
      },
    ]
  },
  title: {
    rendered: ''
  },
  exceprt: {
    rendered: ''
  },
  content: {
    rendered: ''
  }
};

export class MockWordpressService {
  getPageId() {
    return of({
      ...defaults,
    });
  }

  getPostType() {
    return of([{
      ...defaults,
    }]);
  }

  getPosts() {
    return of([]);
  }
}
