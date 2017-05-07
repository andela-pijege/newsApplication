import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Main from './components/Main';
import Source from './components/Source';
import news from './components/News';
// import firebaselogin from './components/fireBaselogin';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/*<Route path="/fireBaselogin" component={firebaselogin} />*/}
      <Route path="/news/:id&:sort" component={news} />
      <IndexRoute component={Source} />
    </Route>
  </Router>,
document.getElementById('app'));
