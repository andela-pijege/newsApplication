import React from 'react';
import Nav from './nav';
import Footer from './footer';

class Main extends React.Component {
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
