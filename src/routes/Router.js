import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/post-photos" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
