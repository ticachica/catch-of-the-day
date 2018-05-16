import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDUutmZZL4JoePoNCr93zFbVnMl3b3Wspw',
  authDomain: 'catch-of-the-day-ticachica.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-ticachica.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
