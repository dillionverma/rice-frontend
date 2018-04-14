import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Layout, Menu, Icon  } from 'antd';
import logo from '../../ricepay-transparent.png'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {

  handleClick = (e) => {
    console.log(e)
    switch(e.key) {
      case 'dashboard':
        this.props.history.push('/dashboard')
        break;
      case 'orders':
        this.props.history.push('/orders')
        break;
      case 'settings':
        this.props.history.push('/settings')
        break;
      case 'restaurant-menus':
        this.props.history.push('/restaurant/menus')
        break;
      case 'restaurant-tables':
        this.props.history.push('/restaurant/tables')
        break;
      case 'logout':
        this.props.logout()
        break;
      default:
        this.props.history.push('/dashboard')
        break;
    }
  }

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.props.collapse}
        breakpoint={'md'}
        style={{ background: '#fff' }}
        trigger={null}
      >
        <div className="logo">
          <img src={logo} alt={"logo"}/>
        </div>
        <Menu theme="light" defaultSelectedKeys={['dashboard']} onSelect={this.handleClick.bind(this)} mode="inline">
          <Menu.Item key="dashboard">
            <Icon type="home" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="orders">
            <Icon type="bars" />
            <span>Orders</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="area-chart" /><span>Reports</span></span>}
          >
            <Menu.Item disabled key="reports-overview">Overview</Menu.Item>
            <Menu.Item disabled key="reports-order-history">Order History</Menu.Item>
            <Menu.Item disabled key="report-refunds">Refunds / Disputes</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="shopping-cart" /><span>Restaurant</span></span>}
          >
            <Menu.Item key="restaurant-menus">Menus</Menu.Item>
            <Menu.Item key="restaurant-tables">Tables</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={<span><Icon type="setting" /><span>Settings</span></span>}
          >
            <Menu.Item key="settings">General</Menu.Item>
            <Menu.Item disabled key="settings-edit-profile">Edit Profile</Menu.Item>
          </SubMenu>
          <Menu.Item key="logout">
            <Icon type="logout" />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
