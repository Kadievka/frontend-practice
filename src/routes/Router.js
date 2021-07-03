import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/post-photos/page/1" to="/post-photos" />
        <Route path="/post-photos/page/:pageNumber" component={Dashboard} />
        <Route path="/post-photos" component={Dashboard}/>
        <Route exact path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
