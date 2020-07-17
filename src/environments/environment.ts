// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'FIREBASE_MAPS_API_KEY',
    authDomain: 'jupiterandthegiraffe-1662d.firebaseapp.com',
    databaseURL: 'https://jupiterandthegiraffe-1662d.firebaseio.com',
    projectId: 'jupiterandthegiraffe-1662d',
    storageBucket: 'jupiterandthegiraffe-1662d.appspot.com',
    messagingSenderId: '434681418965'
  },
  googleMapsApiKey: 'GOOGLE_MAPS_API_KEY',
  baseHref: '/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
