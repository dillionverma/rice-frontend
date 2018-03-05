import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrders } from './OrderActions';
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

function handleMenuClick(e) {
  //message.info('Click on menu item.');
  console.log('click', e);
}

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
      break;
    case 'paid':
      return statusComp(text, 'success')
      break;
    case 'cancelled':
      return statusComp(text, 'error')
      break;
  }
}

const columns = [
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
    width: '12%',
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

class Orders extends Component {
  state = {
    orders: [],
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
      //showSizeChanger: true,
      showQuickJumper: true
    },
    loading: false
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    pager.pageSize = pagination.pageSize;
    this.setState({
      pagination: pager,
    });

    let params = {
      page: pagination.current,
      pageSize: pagination.pageSize
    }
    this.props.getOrders(params)
  }

  componentDidMount() {
    console.log('mount')
    let params = {
      page: this.state.pagination.current,
      pageSize: this.state.pagination.pageSize
    }
    this.setState({loading: true})
    this.props.getOrders(params);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.orders && nextProps.orders.length) {
      const pagination = { ...this.state.pagination };
      pagination.total = nextProps.total;
      this.setState({
        orders: nextProps.orders,
        loading: false,
        pagination,
      });
    }
  }

  render() {
    return(
      <div>
        <Table
          size="middle"
          columns={columns}
          dataSource={this.state.orders}
          rowKey={order => order.id}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders.orders,
    total: state.orders.total,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrders: (pagination) => { dispatch(getOrders(pagination)) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(Orders);
