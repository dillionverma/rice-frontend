import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenus, createMenu, createMenuCategory } from './MenuActions';
import { getMenus } from './selectors'
import MenusView from './MenusView';

class Menus extends Component {
  state = {
    menus: [],
  }

  componentDidMount() {
    this.props.fetchMenus()
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
    menus: getMenus(state)
  }),
  dispatch => ({
    fetchMenus: () => dispatch(fetchMenus()),
    createMenu: (params) => dispatch(createMenu(params)),
    createMenuCategory: (params) => dispatch(createMenuCategory(params))
  }),
)(Menus);
