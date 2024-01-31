import { FC } from 'react';
import {Link} from 'react-router-dom';
import './mobileMenu.css';
import {MenuItem, sorter as sortMenuItems} from '../menuItems';

interface CloseMobileMenuFunction {
  () : void,
}

interface MobileMenuProps {
  closeMobileMenu: CloseMobileMenuFunction,
  isOpen: boolean,
  menuItems: MenuItem[],
}

const MobileMenu: FC<MobileMenuProps> = ({
  closeMobileMenu,
  isOpen,
  menuItems,
}) => {
  return (
    <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
      {menuItems.sort(sortMenuItems).map((menuItem, index) => <li key={index}>
        <Link to={menuItem.to} className="nav-links" onClick={closeMobileMenu}>{menuItem.caption}</Link>
        {menuItem.subMenu && <ul>
          {menuItem.subMenu?.menuItems.sort(sortMenuItems).map((subMenuItem, index) => <li key={index}>
            <Link to={subMenuItem.to} className="nav-link sublink" onClick={closeMobileMenu}>{subMenuItem.caption}</Link>
          </li>)}
        </ul>}
      </li>)}
    </ul>
  );
};

export default MobileMenu;