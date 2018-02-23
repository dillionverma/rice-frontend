import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Row, Col } from 'antd';
import logo from './ricepay-transparent.png'
import './Landing.css';
const { Header, Footer, Sider, Content } = Layout;


const Landing = () =>  {
    return (
    <Layout>
      <Header id="header">
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
