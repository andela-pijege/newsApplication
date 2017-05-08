import React, { Component } from 'react';
import firebase from '../firebaseConfig';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('uid');
      window.location = '/login';
    }, (error) => {
      console.error('Sign Out Error', error);
    });
  }


  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue-grey darken-4">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">News 24/7</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a onClick={() => { this.signOut(); }}>Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
