import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import { authenticate } from './LoginActions';
import { Spin, Icon } from 'antd';

class LoggedIn extends Component {
  componentWillMount() {
    if (this.props.status === false) {
      this.props.authenticate()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === false) {
      this.props.history.push('/')
    }
  }

  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 64 }} />;
    const containerStyles = {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    if (this.props.status) {
      return React.cloneElement(React.Children.only(this.props.children), {
        location: this.props.history.location,
      });
    } else {
      return <div style={containerStyles}><Spin indicator={antIcon}/></div>
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
