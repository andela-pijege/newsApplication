import React, { Component } from 'react';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue-grey darken-4">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">News 24/7</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li>Logout</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
