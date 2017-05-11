import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCjR_xIGdMmwwVgzj99C7UkfW4mPVH1WAY',
  authDomain: 'news24-6e943.firebaseapp.com',
  databaseURL: 'https://news24-6e943.firebaseio.com',
  projectId: 'news24-6e943',
  storageBucket: 'news24-6e943.appspot.com',
  messagingSenderId: '43597015052',
};
firebase.initializeApp(config);
export default firebase;
