import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Source from './components/Source';
import Articles from './components/Articles';
import Favorites from './components/Favorites';
import news from './components/news';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="favorites" component={Favorites} />
      <Route path="articles" component={Articles} />
      <Route path="/news/:id&:sort" component={news} />
      <IndexRoute component={Source} />
    </Route>
  </Router>,
document.getElementById('app'));
// "/articles/:id&:sort"
