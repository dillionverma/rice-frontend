import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';

const { Header: AntHeader } = Layout;

class Header extends Component {
  render() {
    return (
      <AntHeader style={{ background: '#fff', padding: 0, textAlign: 'right' }}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.collapse}
          style={{float: 'left'}}
        />
       <HeaderSearch
          className="search"
          placeholder="Search anything here"
          dataSource={['Restaurant', 'Orders', 'Dashboard']}
          onSearch={(value) => {
            console.log('input', value); // eslint-disable-line
          }}
          onPressEnter={(value) => {
            console.log('enter', value); // eslint-disable-line
          }}
        />
      </AntHeader>
    )
  }
}

export default Header;
