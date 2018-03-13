import React, { Component } from 'react';
import { Tabs, Collapse, List } from 'antd';
import numeral from 'numeral';
import moment from 'moment';

const { Panel } = Collapse;
const { TabPane } = Tabs;

function format(time) {
  return moment(time).format('h:mm a');
}

const MenusView = () => (
  <div>
    <Tabs defaultActiveKey="0">
      {this.props.menus.map(menu =>
          (<TabPane tab={<span>{`${menu.menu} ${format(menu.start_time)} - ${format(menu.end_time)}`}</span>} key={menu.id}>
            <Collapse bordered={false} defaultActiveKey={['0']}>
              {menu.menu_categories.map(category =>
                (<Panel header={category.category} key={category.idi}>
                  <List
                    size="small"
                    itemLayout="vertical"
                    dataSource={category.items}
                    key={category.id}
                    renderItem={item => (
                      <List.Item
                        key={item.id}
                        actions={[<span>{`${numeral(item.price / 100).format('$0,0.00')}`}</span>]}
                        extra={<img width={80} alt={item.name} src={item.image_url} />}
                      >
                        <List.Item.Meta
                          title={<a href="">{item.name}</a>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
                 </Panel>))}
            </Collapse>
           </TabPane>))}
    </Tabs>
  </div>
);

export default MenusView;
