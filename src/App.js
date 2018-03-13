import React, { Component } from 'react';
import './App.css';
import AppFrame from './features/appFrame/AppFrame';
import Landing from './features/landing/Landing';
import Dashboard from './features/dashboard/Dashboard';
import Tables from './features/restaurant/Tables';
import LoginForm from './features/session/LoginForm';
import RegistrationForm from './features/registration/RegistrationForm';
import LoggedIn from './features/session/LoggedIn';
import Orders from './features/orders/Orders';
import Order from './features/orders/Order';
import Menus from './features/menus/Menus';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={RegistrationForm} />
          <LoggedIn>
            <AppFrame>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/menus" component={Menus} />
                <Route path="/orders/:id" component={Order} />
                <Route path="/orders" component={Orders} />
                <Route path="/restaurant/tables" component={Tables} />
              </Switch>
            </AppFrame>
          </LoggedIn>
        </Switch>
      </Router>
    );
  }
}

export default App;
