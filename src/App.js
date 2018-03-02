import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';
import Landing from './features/landing/Landing';
import LoginForm from './features/login/LoginForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path="/login" component={LoginForm} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
