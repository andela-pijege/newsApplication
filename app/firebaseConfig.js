import * as firebase from 'firebase';

const config = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: 'news24-6e943.firebaseapp.com',
  databaseURL: 'https://news24-6e943.firebaseio.com',
  projectId: 'news24-6e943',
  storageBucket: 'news24-6e943.appspot.com',
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);
export default firebase;
