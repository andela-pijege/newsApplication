import React, { Component } from 'react';

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
            <a className="brand-logo">News 24/7</a>
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
