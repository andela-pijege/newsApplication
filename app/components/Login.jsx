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
      <div className="container center">
        <h3>Welcome to News 24/7</h3>
        <div>
          <h4>Get Live Headlines From 60
            Popular News Sources Around the World</h4>
          <div id="firebaseui-container">sign in</div>
        </div>
      </div>
    );
  }
}
