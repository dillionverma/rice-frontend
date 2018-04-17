import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';
import './AppFrame.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { logout } from '../../features/session/SessionActions';

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
            <div>
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

export default connect(
  state => ({
    status: state.session.status
  }),
  dispatch => ({
    logout: () => dispatch(logout()) 
  }),
)(withRouter(AppFrame));
