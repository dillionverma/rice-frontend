import React, { Component } from 'react';
import {
  Table,
  Divider,
  Button,
  message,
  Popconfirm,
  Badge,
} from 'antd';
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

function statusComp(text, status) {
  return (
    <div>
      <Badge status={status}/>
      <span style={{marginRight: '4px'}}>{text}</span>
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
    dataIndex: 'number',
    width: '8%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    //width: '30%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '12%',
    render: data => status(data)
  },
  {
    title: 'Table',
    dataIndex: 'table.number',
    width: '8%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: '12%',
    render: cents => `$${cents/100}`
  },
  {
    title: 'Ordered',
    dataIndex: 'created_at',
    width: '12%',
    render: date => moment(date).fromNow()
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    width: '20%',
    render: (text, record) => (
      <div>
        <Button onClick={handleDeliverClick}>
          Deliver
        </Button>
        <Divider type="vertical"/>
        <Popconfirm placement="top" title={'Are you sure you want to refund?'} onConfirm={refund} okText="Yes" cancelText="No">
          <Button onClick={handleRefundClick}>
            Refund
          </Button>
        </Popconfirm>
      </div>
    ),
  }
];

class OrdersView extends Component {

  render() {
    return(
        <Table
          scroll={{ x: 1000}}
          size="middle"
          columns={columns}
          dataSource={this.props.orders}
          rowKey={order => order.id}
          onRow={this.props.onRow}
          pagination={this.props.pagination}
          loading={this.props.loading}
          onChange={this.props.handleTableChange}
        />
    )
  }
}
export default OrdersView;
