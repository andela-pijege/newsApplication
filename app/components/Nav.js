const React = require('react');
const { Link } = require('react-router');

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">News</Link>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    );
  }
}

module.exports = Nav;
