import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import Photos from '../pages/Photos';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Redirect from="/photos/page/1" to="/photos" />
        <Route exact path="/photos/page/:pageNumber" component={Photos} />
        <Route exact path="/photos" component={Photos}/>

        <Route exact path="/posts" component={Posts}/>

        <Route exact path="/" component={Login}/>

        <Route exact path="/404" component={NotFound}/>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
