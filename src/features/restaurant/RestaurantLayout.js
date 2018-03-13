import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import QRCode from 'qrcode.react';
import {connect} from 'react-redux';
import { getTables } from './RestaurantActions';
import './RestaurantLayout.css';
import { Card, Icon, message, Button } from 'antd';


class RestaurantLayout extends Component {
  state = {
    tables: [],
    layout: [],
    count: 0,
  }

  componentDidMount() {
    console.log('mount')
    this.props.getTables();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tables && nextProps.tables.length == this.state.count + 1) {
      message.success('Table successfully created!')
      this.setState({
        tables: nextProps.tables,
        count: nextProps.tables.length
      });
    } else if (nextProps.tables) {
      this.setState({
        tables: nextProps.tables,
        count: nextProps.tables.length
      });
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <ReactGridLayout 
          className="layout" 
          cols={12} 
          rowHeight={80}
          verticalCompact={false}
          onLayoutChange={(layout) => this.setState({layout: layout})}
          width={1200}>
          { this.state.tables ? this.state.tables.map((table, i) =>
            <div key={table.id} data-grid={{x: table.x, y: table.y, w: table.w, h: table.h}}><div style={{margin: 'auto'}}>{table.number}</div></div>
          ) : 
          null
          }
        </ReactGridLayout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tables: state.restaurant.tables,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTables:   () => { dispatch(getTables()) },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantLayout);


