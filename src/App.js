import React, { Component } from 'react';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';
import Landing   from './features/landing/Landing';
import Tables    from './features/restaurant/Tables';
import LoginForm from './features/login/LoginForm';
import Orders    from './features/orders/Orders';
import Menus     from './features/menus/Menus';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path="/login" component={LoginForm} />
          <Dashboard>
            <Switch>
              <Route path="/menus" component={Menus} />
              <Route path="/orders" component={Orders} />
              <Route path="/restaurant/tables" component={Tables} />
            </Switch>
          </Dashboard>
        </Switch>
      </Router>
    );
  }
}

export default App;
