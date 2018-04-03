import React, { Component } from 'react';
import { Tabs, Collapse, List, Icon, Form, TimePicker, Button, Input } from 'antd';
import numeral from 'numeral';
import moment from 'moment';
import PriceInput from './PriceInput';

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane

const FormItem = Form.Item;

function format(time) {
  return moment(time).format('h:mm a')
}

function menuTitle(menu) {
  if (menu.menu == null) {
    return 'no name';
  } else {
    return `${menu.menu} ${format(menu.start_time)} - ${format(menu.end_time)}`;
  }
}

class MenuForm extends Component {
  _handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const params = { 
        menu: {
          name: fieldsValue['menu-name'],
          start_time: fieldsValue['start-time'].format('HH:mm'),
          end_time: fieldsValue['end-time'].format('HH:mm'),
        }
      };
      console.log('Received values of form: ', params);
      this.props.createMenu(params)
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const timeConfig = {
      rules: [{ type: 'object', required: true, message: 'Please select time' }],
    };
    const nameConfig = {
      rules: [{ type: 'string', required: true, message: 'Please input menu name'}]
    };

    const format = 'HH:mm';
    return (
      <div className="center-container">
        <Form onSubmit={this._handleSubmit}>
           <FormItem>
              {getFieldDecorator('menu-name', nameConfig)(
                <Input id='menu-name' placeholder="Menu name" />
              )}
            </FormItem>
           <FormItem>
              {getFieldDecorator('start-time', timeConfig)(
                <TimePicker id="start-time" initialValue={moment('12:00', format)} format={format} placeholder="Start time" />
              )}
            </FormItem>
           <FormItem>
              {getFieldDecorator('end-time', timeConfig)(
                <TimePicker id="end-time" initialValue={moment('12:08', format)} format={format} placeholder="End time"/>
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>
        </Form>
      </div>
    )
  }
}


const MenuFormWrapper = Form.create()(MenuForm)

class MenuCategoryForm extends Component {
  state = {
    menu: null,
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const params = { 
        menu_id: this.state.menu.id,
        menu_category: {
          name: fieldsValue['category-name'],
        }
      };
      console.log('Received values of form: ', params);
      this.props.createMenuCategory(params)
    });
  }

  componentDidMount() {
    this.setState({menu: this.props.menu})
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const nameConfig = {
      rules: [{ type: 'string', required: true, message: 'Please input category name'}]
    };
    return (
      <div className="center-container">
        <Form onSubmit={this._handleSubmit} layout="inline">
           <FormItem>
              {getFieldDecorator('category-name', nameConfig)(
                <Input id='category-name' placeholder="Category name" />
              )}
            </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const MenuCategoryFormWrapper = Form.create()(MenuCategoryForm)


class ItemForm extends Component {
  state = {
    category: null,
    menu: null,
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const params = { 
        item: {
          menu_id: this.state.menu.id,
          menu_category_id: this.state.category.id,
          name: fieldsValue['item-name'],
          description: fieldsValue['item-description'],
          price: fieldsValue['item-price'].number,
          image_url: null,
        }
      };
      console.log('Received values of form: ', params);
      this.props.createItem(params)
    });
  }

  componentDidMount() {
    this.setState({
      category: this.props.category,
      menu: this.props.menu,
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const nameConfig = {
      rules: [{ type: 'string', required: true, message: 'Please input item name'}]
    };
    const priceConfig = {
      initialValue: { number: 1000, currency: 'cad' },
      rules: [
        { 
          type: 'object',
          //pattern: /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/,
          required: true, 
          message: 'Please input item price',
        }
      ]
    };
    return (
      <div className="center-container">
        <Form onSubmit={this._handleSubmit} layout="inline">
           <FormItem>
              {getFieldDecorator('item-name', nameConfig)(
                <Input id='item-name' placeholder="Item name" />
              )}
            </FormItem>
           <FormItem>
              {getFieldDecorator('item-description', nameConfig)(
                <Input id='item-description' placeholder="Item description" />
              )}
            </FormItem>
           <FormItem>
              {getFieldDecorator('item-price', priceConfig)(
                <PriceInput id='item-price' placeholder="Price"/>
              )}
            </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const ItemFormWrapper = Form.create()(ItemForm)

class MenusView extends Component {

  render() {
    return(
      <div>
        <Tabs defaultActiveKey="0">
          {this.props.menus.map((menu, i) =>
          <TabPane tab={<span>{menuTitle(menu)}</span>} key={i}>
            <Collapse bordered={false} defaultActiveKey={['0']}>
                {menu.menu_categories.map((category, i) =>
                  <Panel header={category.category} key={i}>
                    <List
                      size="small"
                      itemLayout="vertical"
                      dataSource={category.items}
                      key={i}
                      renderItem={(item, i) => (
                        <List.Item
                          key={i}
                          actions={[<span>{`${numeral(item.price/100).format('$0,0.00')}`}</span>]}
                          extra={<img width={80} alt={item.name} src={item.image_url} />}
                        >
                          <List.Item.Meta
                            title={<a href="">{item.name}</a>}
                            description={item.description}
                          />
                        </List.Item>
                      )}
                    />
                    <ItemFormWrapper 
                      category={category} 
                      menu={menu}
                      createItem={this.props.createItem}
                    />
                  </Panel>
                )}
                <Panel header={<span>New <Icon type="plus"/></span>} key={menu.categories ? menu.categories.length : 100}>
                  <MenuCategoryFormWrapper 
                    menu={menu} 
                    createMenuCategory={this.props.createMenuCategory}
                  />
                </Panel>
              </Collapse>
            </TabPane>
          )}
          <TabPane key={this.props.menus.length} tab={<span>New <Icon type="plus"/></span>} >
            <MenuFormWrapper createMenu={this.props.createMenu}/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Form.create()(MenusView);
