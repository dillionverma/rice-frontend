import { schema } from 'normalizr';

const itemSchema = new schema.Entity('items');
const menuCategorySchema = new schema.Entity('menu_categories', {
  items: [ itemSchema ],
});
const menuSchema = new schema.Entity('menus', {
  menu_categories: [ menuCategorySchema ],
});

const menu = { menu: menuSchema }
const menuCategory = { menu_category: menuCategorySchema }
const item = { item: itemSchema }
const menuList = { menus: [ menuSchema ] };

export default { item, menuCategory, menu, menuList };

