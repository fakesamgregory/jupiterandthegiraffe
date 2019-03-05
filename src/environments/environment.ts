// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA0He8885a4_wSLc4ZKkzT4-DW3gNfeg-E',
    authDomain: 'jupiterandthegiraffe-1662d.firebaseapp.com',
    databaseURL: 'https://jupiterandthegiraffe-1662d.firebaseio.com',
    projectId: 'jupiterandthegiraffe-1662d',
    storageBucket: 'jupiterandthegiraffe-1662d.appspot.com',
    messagingSenderId: '434681418965'
  },
  baseHref: '/',
  googleMapsApiKey: '${GOOGLE_MAPS_API_KEY}'
};
