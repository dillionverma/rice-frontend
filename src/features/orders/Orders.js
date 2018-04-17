import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrders } from './OrdersActions';
import OrdersView from './OrdersView';

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
    if (nextProps.orders) {
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
      <div className="page-container">
        <OrdersView
          onRow={(record) => {
            return {
              onClick: () => {this.props.history.push(`/orders/${record.number}`)},       // click row
            };
          }}
          orders={this.state.orders}
          pagination={this.state.pagination}
          loading={this.state.loading}
          handleTableChange={this.handleTableChange}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    orders: state.orders.orders,
    total: state.orders.total,
  }),
  dispatch => ({
    getOrders: pagination => dispatch(getOrders(pagination))
  }),
)(Orders);
