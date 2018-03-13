import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMenus } from './MenuActions';
import MenusView from './MenusView';


class Menus extends Component {
  state = {
    menus: [],
  }

  componentDidMount() {
    this.props.getMenus();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menus && nextProps.menus.length) {
      this.setState({
        menus: nextProps.menus,
      });
    }
  }

  render() {
    console.log(this.state.menus);
    return (
      <div>
        { this.state.menus.length ?
          <MenusView menus={this.state.menus} />
         :
          <p>No Data</p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menus: state.menus.menus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMenus: () => { dispatch(getMenus()); },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menus);
