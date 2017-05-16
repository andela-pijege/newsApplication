import React, { Component } from 'react';
import firebase from '../firebaseConfig';

/**
 * @desc represents Nav component
 * @class Nav
 * @extends {Component}
 */
class Nav extends Component {
  /**
   * @desc Creates an instance of Nav
   * @memberof Nav
   */
  constructor() {
    super();
    this.state = {};
  }
/**
 * @desc signs a user out of the application
 * @memberof Nav
 * @returns {void}
 */
  signOut() {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('uid');
      window.location = '/login';
    }, (error) => {
      window.error('Sign Out Error', error);
    });
  }

  /**
   * @desc renders elements to the DOM
   * @memberof Nav
   * @returns {object} rendered html elements in the DOM
   */
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue-grey darken-4">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">News 24/7</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a onClick={this.signOut}>Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
