import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDxEjXpwPq5_UL_hfLCG6W4NNdKj8tarYU',
    authDomain: 'myfirst-da3b1.firebaseapp.com',
    databaseURL: 'https://myfirst-da3b1.firebaseio.com',
    projectId: 'myfirst-da3b1',
    storageBucket: 'myfirst-da3b1.appspot.com',
    messagingSenderId: '152039804806',
    appId: '1:152039804806:web:f2485aaafac1ccf3312607',
    measurementId: 'G-6D724ELQEG',
  });
}

export default firebase;
