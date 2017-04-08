import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/Login" component={Login} />
      <Route path="/" component={IndexPage} />
      <Route path="/IndexPage" component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;
