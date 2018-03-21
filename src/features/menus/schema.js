import { schema } from 'normalizr';

const item = new schema.Entity('items');
const menuCategory = new schema.Entity('menu_categories', {
  items: [ item ],
});
const menu = new schema.Entity('menus', {
  menu_categories: [ menuCategory ],
});
const menuList = [ menu ];

export default { item, menuCategory, menu, menuList };

