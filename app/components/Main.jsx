import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

/**
 * @desc represents Main component
 * @class Main
 * @extends {React.Component}
 */
class Main extends React.Component {
  /**
   *
   * @desc renders this components and its props
   * @return {object} a rendered object of html elements
   * @memberof Main
   */
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

module.exports = Main;
