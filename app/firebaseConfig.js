import * as firebase from 'firebase';
// import firebaseui from 'firebaseui';


// Initialize Firebase
// document.onreadystatechange = () => {
//   if (document.readyState === 'interactive') {
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
//  // FirebaseUI config.
//     const uiConfig = {
//       signInSuccessUrl: window.location.href,
//       signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       ],
//     };

// // Initialize the FirebaseUI Widget using Firebase.
//     const ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
//     ui.start('#app', uiConfig);
//   }

