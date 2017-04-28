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
              <li><Link to="/">News</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
{/*<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>*/}