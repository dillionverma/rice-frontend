import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Row, Col, Menu } from 'antd';
import logo from '../../ricepay-transparent.png'
import './Landing.css';
const { Header, Footer, Content } = Layout;


const Landing = () =>  {
    return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">tst</a></li>
          </ul>
        </nav>
      </header>
      <section id="rice-1">
        1
      </section>
      <section id="rice-2">2</section>
      <section id="rice-3">3</section>
      <section id="rice-3">4</section>
      <section id="rice-3">5</section>
      <section>
        <Row>
          <Col xs={24} md={12}>
            <h1>Welcome To RicePay Landing Page</h1>
            <Button className="nav-btn">
              <Link className="link" to="login">Login</Link>
            </Button>
            <Button className="nav-btn">
              <Link className="Dashboard" to="dashboard">Dashboard</Link>
            </Button>
          </Col>
        </Row>
      </section>
      <footer>Footer</footer>
    </div>
    );
}

export default Landing;
