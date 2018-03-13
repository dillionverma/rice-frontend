import React, { Component } from 'react';
import {
  Divider,
  Button,
  message,
  Badge,
  Table,
  Row,
  Col,
} from 'antd';
import { connect } from 'react-redux';
import { getOrder } from './OrdersActions';
import './Order.css'
import moment from 'moment';


function handleDeliverClick(e) {
  message.success('Successfully Delivered');
  console.log('click left button', e);
}

function handleRefundClick(e) {
  //message.info('Click on Refund button.');
  console.log('click left button', e);
}

//function handleMenuClick(e) {
  ////message.info('Click on menu item.');
  //console.log('click', e);
//}

function refund() {
  message.success('Successfully Refunded')
}

function stepProps(status) {
  switch(status) {
    case 'ordered':
      return {current: 0, status: 'process'};
    case 'delivered':
      return {current: 1, status: 'wait'};
    case 'paid':
      return {current: 2, status: 'finish'};
    case 'cancelled':
      return {current: 0, status: 'error'};
    default:
      return 0;
  }
}

function statusComp(text, status) {
  return (
    <div>
      <Badge status={status}/>
      <span>{text}</span>
    </div>
  )
}

function status(text) {
  switch(text) {
    case 'ordered':
      return statusComp(text, 'processing')
    case 'paid':
      return statusComp(text, 'success')
    case 'cancelled':
      return statusComp(text, 'error')
    case 'delivered':
      return statusComp(text, 'warning')
    default:
      return null
  }
}

const columns = [
  {
    title: 'Number',
    dataIndex: 'id',
    width: '10%',
  },
  {
    title: 'Item',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    width: '10%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: '10%',
    render: cents => `$${cents/100}`
  },
  {
    title: 'Instructions',
    dataIndex: 'instructions',
  },
  {
    title: 'Action',
    width: '12%',
    render: (record) => (
      <div>
        <Button onClick={handleDeliverClick}>
          Deliver
        </Button>
      </div>
    ),
  }
];


class Order extends Component {

  componentDidMount() {
    this.props.getOrder(this.props.match.params.id)
  }
  render() {
    const { order } = this.props;
    return(
      <div>
        {order &&
        <div>
          <div className="order-section order-heading">
            <div>
              <h2>Order number: {order.number}</h2>
            </div>
            <div className="order-info">
              <Row>
                <Col sm={24} md={16} lg={18}>
                  <Row>
                    <Col sm={24} md={24} lg={12}>
                      <div className="info-container">
                        <div className="info">Customer Name:</div>
                        <div className="info-value">{order.name}</div>
                      </div>
                      <div className="info-container">
                        <div className="info">Ordered At:</div>
                        <div className="info-value">{moment(order.created_at).fromNow()}</div>
                      </div>
                      <div className="info-container">
                        <div className="info">Order Time:</div>
                        <div className="info-value">{moment(order.created_at).format('MMMM Do YYYY, h:mm:ss a')}</div>
                      </div>
                    </Col>
                    <Col sm={24} md={24} lg={8}>
                      <div className="info-container">
                        <div className="info">Table:</div>
                        <div className="info-value">{order.table.number}</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col sm={24} md={8} lg={6}>
                  <Row className="order-secondary-info">
                    <Col xs={24} md={12}>
                      <div className="text-secondary">Status</div>
                      <div className="detail-heading">{status(order.status)}</div>
                    </Col>
                    <Col xs={24} md={12}>
                      <div className="text-secondary">Price</div>
                      <div className="detail-heading">{`$${order.price/100}`}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <Divider/>
          <div className="order-section order-steps">
            <Table
              size="middle"
              columns={columns}
              dataSource={order.order_items}
              pagination={false}
              rowKey={order => order.id}
            />
          </div>
        </div>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    order: state.orders.order,
  }),
  dispatch => ({
    getOrder: id => dispatch(getOrder(id))
  }),
)(Order);
