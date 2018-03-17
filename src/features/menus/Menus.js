import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMenus, createMenu, createMenuCategory } from './MenuActions';
import MenusView from './MenusView';


class Menus extends Component {
  state = {
    menus: [],
  }

  componentDidMount() {
    this.props.getMenus()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menus && nextProps.menus.length) {
      this.setState({
        menus: nextProps.menus,
      })
    }
  }

  render() {
    console.log(this.state.menus)
    return(
      <div>
        { this.state.menus.length ?
        <MenusView 
          menus={this.state.menus} 
          createMenu={this.props.createMenu}
          createMenuCategory={this.props.createMenuCategory}
        />
         :
          <p>No Data</p>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    menus: state.menus.menus,
  }),
  dispatch => ({
    getMenus: () => dispatch(getMenus()),
    createMenu: (params) => dispatch(createMenu(params)),
    createMenuCategory: (params) => dispatch(createMenuCategory(params))
  }),
)(Menus);
