import React, { Component } from 'react';
import { Tabs, Collapse, List, Avatar, Icon } from 'antd';
import numeral from 'numeral';

const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane

class MenusView extends Component {
  render() {
    return(
      <div>
        <Tabs defaultActiveKey="0">
          {this.props.menus.map((menu, i) =>
          <TabPane tab={menu.menu} key={i}>
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
                            title={<a href="#">{item.name}</a>}
                            description={item.description}
                          />
                        </List.Item>
                      )}
                    />
                  </Panel>
                )}
              </Collapse>
            </TabPane>
          )}
        </Tabs>
      </div>
    )
  }
}

export default MenusView;
