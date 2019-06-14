import React from 'react';
import {Route, Switch, Redirect, BrowserRouter,hashHistor,Router} from 'react-router-dom'
import App from './../App';
import Home from './../pages/home'
import Login from './../pages/login'
import Order from './../pages/order'
const Root = () => (
  <div>
    <Switch>
      <Route
        path="/"
        render={props => (
          <App>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/order" exact component={Order} />
              {/*路由不正确时，默认跳回home页面*/}
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </App>
        )}
      />
    </Switch>
  </div>
);
export default Root;
