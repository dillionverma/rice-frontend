import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTables, createTable } from './RestaurantActions';
import QRCode from 'qrcode.react';
import './Tables.css';
import { Card, Icon, message, Button } from 'antd';

const gridStyle = {
  width: '20%',
  textAlign: 'center',
};

class Tables extends Component {
  state = {
    tables: [],
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
    return (
      <div>
        <div className="button-row">
          <Button onClick={() => this.props.createTable()} type="primary" icon="plus" size="large">New</Button>
        </div>
        <Card title="Tables">
          { this.state.tables ? this.state.tables.map((table, i) =>
          <Card.Grid key={i} style={gridStyle}>
            <QRCode size={64} value={`${table.id}`} />
            <Card.Meta style={{marginTop: '10px' }} description={`${table.number}`}/>
          </Card.Grid>
          ) :
          <Card loading style={gridStyle}/>
        }
        </Card>
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
    getTables:   () => { dispatch(getTables())   },
    createTable: () => { dispatch(createTable()) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tables);
