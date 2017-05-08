import React from 'react';
import firebase from '../firebaseConfig';

export default class Login extends React.Component {

  componentDidMount() {
     // FirebaseUI
    const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      tosUrl: 'https://www.google.com',
      callbacks: {
        signInSuccess: (user, credential, redirectUrl) => {
          localStorage.setItem('uid', user.uid);
          return true;
        },
      },
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-container', uiConfig);
  }

  render() {
    return (
      <div className="container-fluid login-page">
        <h1 className="brand">News 24/7</h1>
        <div className="content">
          <h2 className="text-center headline">Get Live Headlines From 60
            Popular News Sources Around the World</h2>
          <div id="firebaseui-container"></div>
        </div>
      </div>
    );
  }
}
