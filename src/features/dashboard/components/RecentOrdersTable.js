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
    width: '12%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    //width: '16%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    //width: '10%',
    render: data => status(data)
  },
  {
    title: 'Table',
    dataIndex: 'table.number',
    width: '10%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    //width: '8%',
    render: cents => `$${cents/100}`
  },
  {
    title: 'Ordered',
    dataIndex: 'created_at',
    render: date => moment(date).fromNow()
  },
];

const RecentOrdersTable = ({data, onRow}) => {
  return(
    <Table
      scroll={{ x: 600}}
      bordered={false}
      size="small"
      columns={columns}
      dataSource={data}
      rowKey={order => order.id}
      onRow={onRow}
      pagination={false}
    />
  )
}

export default RecentOrdersTable;
