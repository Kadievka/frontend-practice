import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import Photos from '../pages/Photos';

function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Redirect from="/photos/page/1" to="/photos" />
        <Route path="/photos/page/:pageNumber" component={Photos} />
        <Route path="/photos" component={Photos}/>

        <Route path="/posts" component={Posts}/>

        <Route exact path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
