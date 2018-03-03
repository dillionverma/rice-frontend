import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTables } from './RestaurantActions';
import QRCode from 'qrcode.react';
import { Card } from 'antd';

const gridStyle = {
  textAlign: 'center',
};

class Tables extends Component {
  state = {
    tables: []
  }

  componentDidMount() {
    console.log('mount')
    this.props.getTables();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({tables: nextProps.tables});
  }

  render() {
    return (
      <div>
        <Card title="Tables">
          { this.state.tables ? this.state.tables.map((table, i) =>
          <Card.Grid key={i} style={gridStyle}>
            <QRCode value={`http://localhost:3000/api/v1/menu?table=${table.id}`} />
            <Card.Meta style={{marginTop: '10px' }} description={table.id}/>
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
    getTables: () => { dispatch(getTables()) }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(Tables);
