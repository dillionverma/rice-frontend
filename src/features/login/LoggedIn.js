import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import { authenticate } from './LoginActions';

class LoggedIn extends Component {
  componentWillMount() {
    if (this.props.status === false) {
      this.props.authenticate()
    }
  }

  render() {
    if (this.props.status) {
      return React.cloneElement(React.Children.only(this.props.children), {
        location: this.props.history.location,
      });
    } else {
      return <Redirect to="/"/>
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
  mapDispatchToProps
)(withRouter(LoggedIn));
