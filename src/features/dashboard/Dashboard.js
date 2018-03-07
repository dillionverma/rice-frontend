import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import './Dashboard.css';

class Dashboard extends Component {

  render() {
    return(
      <div>
        <Row>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card>Total Sales</Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card>Total Views</Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card>Peak Times</Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card>Best selling food</Card>
          </Col>
        </Row>
        <Row>
          <Col sm={24} className="chart-col">
            <Card>Big Chart Here</Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="chart-col">
            <Card>Most Recent Orders Here</Card>
          </Col>
          <Col sm={12} className="chart-col">
            <Card>Breakdown of foods ordered here</Card>
          </Col>
        </Row>
        <Row>
          <Col sm={24} className="chart-col">
            <Card>Customers by hour breakdown here</Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
