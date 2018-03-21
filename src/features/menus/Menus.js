import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMenus, createMenu, createMenuCategory } from './MenuActions';
import MenusView from './MenusView';

import { denormalize, schema } from 'normalizr';

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

const itemSchema = new schema.Entity('items');

const menuCategorySchema = new schema.Entity('menu_categories', {
  items: [ itemSchema ],
});

const menuSchema = new schema.Entity('menus', {
  menu_categories: [ menuCategorySchema ],
});

const menuListSchema = [ menuSchema ];
export default connect(
  state => {
    const { entities } = state.menus
    const mySchema = { menus: [ menuSchema ] }
    return {
    menus: denormalize({ menus: Object.keys(entities.menus) }, mySchema, entities).menus,
  }},
  dispatch => ({
    getMenus: () => dispatch(getMenus()),
    createMenu: (params) => dispatch(createMenu(params)),
    createMenuCategory: (params) => dispatch(createMenuCategory(params))
  }),
)(Menus);
