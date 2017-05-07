import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

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
