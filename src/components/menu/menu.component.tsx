import './menu.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import HMenu from './hMenu/hMenu.component';
import { getMenuItems } from './menuItems';

const Menu = () => {
  const menu = getMenuItems(useWindowDimensions());

  return (
    <>
      <nav className="navbar">
        <HMenu menuItems={menu}></HMenu>
      </nav>
    </>
  );
};

export default Menu;