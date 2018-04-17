import React, { Component } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Row, Col, Card, Badge, Tooltip as ToolTip, Icon } from 'antd';
import './Dashboard.css';

const { Meta } = Card;

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page H', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page I', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page J', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page K', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page L', uv: 2780, pv: 3908, amt: 2000},
];

const pieData = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const info = description =>
  <ToolTip title={description}>
    <Icon style={{position: 'relative'}} type="question-circle-o" />
  </ToolTip>

class Dashboard extends Component {

  render() {
    return(
      <div className="dashboard">
        <Row>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card title="Total Sales" extra={info("Total sales from orders")}>
              <h1>$ 120,000 </h1>
              <Meta description="Tips: $12.00" />
            </Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card title="Dining Duration" extra={info("Average time spanned from scanning QR code to paying")}>
              <div>
                <h2>12 minutes</h2>
              </div>
              <div style={{height: '40px'}} >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line type='monotone' dataKey='pv' stroke='#66BB6A' strokeWidth={2} />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card title="Best Selling" extra={info("Menu items with the most sales")}>
              <div><h2>Banana Cake</h2></div>
              <div style={{height: '40px'}} >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar dataKey='uv' fill='#29B6F6'/>
                    <Tooltip cursor={false} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
          <Col sm={24} md={12} xl={6} className="chart-col">
            <Card title="Orders" extra={info("Average number of orders in each state")}>
              <div>
                <div className="order-total-container">
                  <div>
                    <Badge status={"success"}/>
                    <span style={{marginRight: '4px'}}>{"paid"}</span>
                  </div>
                  <h2 className="order-total-text">1,203</h2>
                </div>
                <div className="order-total-container">
                  <div>
                    <Badge status={"processing"}/>
                    <span style={{marginRight: '4px'}}>{"ordered"}</span>
                  </div>
                  <h2 className="order-total-text">14</h2>
                </div>
                <div className="order-total-container">
                  <div>
                    <Badge status={"warning"}/>
                    <span style={{marginRight: '4px'}}>{"delivered"}</span>
                  </div>
                  <h2 className="order-total-text">2</h2>
                </div>
                <div className="order-total-container">
                  <div>
                    <Badge status={"error"}/>
                    <span style={{marginRight: '4px'}}>{"cancelled"}</span>
                  </div>
                  <h2 className="order-total-text">5</h2>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={24} className="chart-col">
            <Card title="Total Sales" extra={info("Total sales of orders for timeframe")}>
              <div style={{height: '300px'}} >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line type='monotone' dataKey='pv' stroke='#66BB6A' strokeWidth={2} />
                    <Tooltip cursor={false} />
                    <CartesianGrid stroke="#e4e4e4" strokeDasharray="3 3" />
                    <XAxis axisLine={false} tickLine={false} dataKey="name" />
                    <YAxis axisLine={false} tickLine={false}/>
                    <Legend iconType="circle" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="chart-col">
            <Card title="Most Recent Orders" extra={info("Most recent orders")}>
              <p>Coming Soon...</p>
            </Card>
          </Col>
          <Col sm={12} className="chart-col">
            <Card title="Breakdown of Foods Ordered" extra={info("Relative quantities of top items purchased")}>
              <div style={{height: '300px'}} >
                  <PieChart width={300} height={300}>
                    <Pie 
                      isAnimationActive
                      data={pieData} 
                      outerRadius={80} 
                      innerRadius={60}
                      paddingAngle={5}
                      fill="#8884d8" 
                      label
                    />
                    <Tooltip/>
                  </PieChart>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
