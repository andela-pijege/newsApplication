import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Source from './components/Source';
import news from './components/News';
import login from './components/Login';
// import firebaseLogin from './fireBaselogin';

export default (
  <Route path="/" components={Main}>
    <IndexRoute components={Source} />
    <Route path="/news/:id&:sort" components={news} />
    <Route path="/login" components={login} />
  </Route>
);
