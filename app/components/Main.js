import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {/*<h1>Main Component!!!</h1>*/}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

module.exports = Main;
