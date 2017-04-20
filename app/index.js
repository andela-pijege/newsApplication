import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import News from './components/News';
import Search from './components/Search';
import Favorites from './components/Favorites';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="search" component={Search} />
      <Route path="favorites" component={Favorites} />
      <IndexRoute component={News} />
    </Route>
  </Router>,
document.getElementById('app'));
