import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Main from './components/main';
import Source from './components/source';
import news from './components/news';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="/news/:id&:sort" component={news} />
      <IndexRoute component={Source} />
    </Route>
  </Router>,
document.getElementById('app'));
