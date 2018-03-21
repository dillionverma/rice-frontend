import { denormalize } from 'normalizr';
import schema from './schema';

export const getMenus = (state) => {
  return denormalize({ menus: Object.keys(state.entities.menus) }, schema.menuList, state.entities).menus
}
