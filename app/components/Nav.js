var React = require('react');
var {Link} = require('react-router');

class Nav extends React.Component {
    render() {
        return (
            <div>
                <h2>Navigation Component!!!</h2>
                <Link to="/">News</Link>
                <Link to="/search">Search</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        );
    }
}

module.exports = Nav;