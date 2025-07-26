import './menu.css';
import HMenu from './hMenu/hMenu.component';
import { getMenuItems } from './menuItems';

const Menu = () => {
  const menu = getMenuItems();

  return (
    <>
      <nav className="navbar">
        <HMenu menuItems={menu}></HMenu>
      </nav>
    </>
  );
};

export default Menu;