import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './Dashboard.css';
import logo from './ricepay-transparent.png'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          breakpoint={'md'}
        >
          <div className="logo">
            <img src={logo} alt={"logo"}/> 
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bars" />
              <span>Orders</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="area-chart" /><span>Reports</span></span>}
            >
              <Menu.Item key="3">Overview</Menu.Item>
              <Menu.Item key="4">Order History</Menu.Item>
              <Menu.Item key="5">Refunds / Disputes</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="profile" /><span>Menu</span></span>}
            >
              <Menu.Item key="6">Overview</Menu.Item>
              <Menu.Item key="7">Add Menu</Menu.Item>
              <Menu.Item key="8">Add Menu Category</Menu.Item>
              <Menu.Item key="9">Add Menu Item</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="setting" /><span>Settings</span></span>}
            >
              <Menu.Item key="10">General</Menu.Item>
              <Menu.Item key="11">Edit Profile</Menu.Item>
            </SubMenu>
            <Menu.Item key="12">
              <Icon type="logout" />
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Welcome to Ricepay!
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

export default Dashboard;
