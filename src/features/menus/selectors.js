import { denormalize } from 'normalizr';
import schema from './schema';

export const getMenus = (state) => {
  return denormalize({ menus: Object.keys(state.menus.entities.menus) }, schema.menuList, state.menus.entities).menus
}
