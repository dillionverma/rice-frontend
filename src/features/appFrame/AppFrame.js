import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';
import './AppFrame.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { logout } from '../login/LoginActions';

const { Content, Footer} = Layout;

class AppFrame extends Component {
  state = {
    collapsed: false,
  };
  collapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    function upCase(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar
          logout={this.props.logout}
          collapsed={this.state.collapsed}
          collapse={this.collapse}
        />
        <Layout>
          <Header
            collapsed={this.state.collapsed}
            collapse={this.collapse}
          />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
             {this.props.location.pathname.split('/').map((path, i) =>
              <Breadcrumb.Item key={i}>{upCase(path)}</Breadcrumb.Item>
             )}
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            RicePay © 2018  |  All rights reserved.
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.login.status
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => { dispatch(logout()) }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppFrame));
