import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import './Dashboard.css';

class Dashboard extends Component {

  render() {
    return(
      <div>
        <Row>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card title="Total Sales">
              <p>Coming Soon...</p>
            </Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card title="Total Views">
              <p>Coming Soon...</p>
            </Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card title="Peak Times">
              <p>Coming Soon...</p>
            </Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card title="Best Selling Food">
              <p>Coming Soon...</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={24} className="chart-col">
            <Card title="Total Sales">
              <p>Coming Soon...</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="chart-col">
            <Card title="Most Recent Orders">
              <p>Coming Soon...</p>
            </Card>
          </Col>
          <Col sm={12} className="chart-col">
            <Card title="Breakdown of Foods Ordered">
              <p>Coming Soon...</p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={24} className="chart-col">
            <Card title="Customers Per Hour">
              <p>Coming Soon...</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
