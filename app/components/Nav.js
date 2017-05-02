import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="black">
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">News</a></li>
              <li>logout</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
