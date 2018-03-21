import React, { Component } from 'react';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';
import schema from './schema';
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
  state => {
    const { entities } = state.menus
    return {
    menus: denormalize({ menus: Object.keys(entities.menus) }, schema.menuList, entities).menus,
  }},
  dispatch => ({
    getMenus: () => dispatch(getMenus()),
    createMenu: (params) => dispatch(createMenu(params)),
    createMenuCategory: (params) => dispatch(createMenuCategory(params))
  }),
)(Menus);
