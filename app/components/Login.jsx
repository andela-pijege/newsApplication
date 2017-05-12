import React from 'react';
import firebase from '../firebaseConfig';

/**
 * @desc represents Login component
 *
 * @class Login
 * @extends {React.Component}
 */

export default class Login extends React.Component {

  /**
   *
   * @desc represents a life cycle state of this component.
   * It updates the state of this component when it is rendered.
   *
   * @memberof Login
   */
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
   /**
   *
   * @desc renders elements to the DOM
   *
   * @memberof Login
   */
  render() {
    return (
      <div className="container center login-wrapper">
        <h3>Welcome to News 24/7</h3>
        <div>
          <h6>Get Live Headlines From 60
            Popular News Sources Around the World</h6>
          <div id="firebaseui-container"></div>
        </div>
      </div>
    );
  }
}
