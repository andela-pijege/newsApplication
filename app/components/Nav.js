import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">News Feed</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">News</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
