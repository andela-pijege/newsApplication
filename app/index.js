var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
var Main = require('./components/Main');
var News = require('./components/News');
var Search = require('./components/Search');
var Favorites = require('./components/Favorites');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="search" component={Search}/>
            <Route path="favorites" component={Favorites}/>
            <IndexRoute component={News}/>
        </Route>
    </Router>,
 document.getElementById('app'));