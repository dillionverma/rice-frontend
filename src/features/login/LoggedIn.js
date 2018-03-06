import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { authenticate } from './LoginActions';
import { Spin } from 'antd';

class LoggedIn extends Component {
  componentWillMount() {
    if (this.props.status == false) {
      this.props.authenticate()
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('next', nextProps)
    if (nextProps.status == false) {
      this.props.history.push('/')
    }
  }

  render() {
    if (this.props.status) {
      return React.cloneElement(React.Children.only(this.props.children), {
        location: this.props.history.location,
      });
    } else {
      return <Spin/>
    }
  }
}


function mapStateToProps(state) {
  return {
    status: state.login.status,
    error: state.login.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: () => { dispatch(authenticate()) }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)
(withRouter(LoggedIn));
