import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Row, Col, Menu } from 'antd';
import logo from '../../ricepay-transparent.png'
import './Landing.css';
const { Header, Footer, Sider, Content } = Layout;


const Landing = () =>  {
    return (
    <Layout>
      <Header id="header" style={{background: '#fff'}}>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', float: 'right' }}
        >
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="1">nav 1</Menu.Item>
        </Menu>
        <div className="container">
          <img alt="logo" id="logo" src={logo} />
        </div>
      </Header>
      <Content>
        <div className="container">
          <Row>
            <Col span={24}>
              <h1>Welcome To RicePay Landing Page</h1>
              <Button className="nav-btn">
                <Link className="link" to="login">Login</Link>
              </Button>
              <Button className="nav-btn">
                <Link className="Dashboard" to="dashboard">Dashboard</Link>
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    );
}

export default Landing;
