import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Layout, Menu, Icon  } from 'antd';
import logo from '../../ricepay-transparent.png'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {

  handleClick = (e) => {
    console.log(e)
    switch(parseInt(e.key, 10)) {
      case 1:
        this.props.history.push('/dashboard')
        break;
      case 2:
        this.props.history.push('/orders')
        break;
      case 6:
        this.props.history.push('/menus')
        break;
      case 10:
        this.props.history.push('/restaurant/tables')
        break;
      case 13:
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
        <Menu theme="light" defaultSelectedKeys={['1']} onSelect={this.handleClick.bind(this)} mode="inline">
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
            title={<span><Icon type="shopping-cart" /><span>Restaurant</span></span>}
          >
            <Menu.Item key="10">Tables</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={<span><Icon type="setting" /><span>Settings</span></span>}
          >
            <Menu.Item key="11">General</Menu.Item>
            <Menu.Item key="12">Edit Profile</Menu.Item>
          </SubMenu>
          <Menu.Item key="13">
            <Icon type="logout" />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
