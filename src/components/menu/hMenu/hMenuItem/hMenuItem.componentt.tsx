import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, closeSubMenu, openSubMenu } from '../../menuItems';
import HSubMenu from '../hSubMenu/hSubMenu.componentt';
import './hMenuItem.css';

interface HMenuItemProps {
  menuItem: MenuItem,
}

const HMenuItem:FC<HMenuItemProps> = ({menuItem}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className="menu-item" onMouseOverCapture={openSubMenu(menuItem, setIsOpen)} onMouseOut={closeSubMenu(menuItem, setIsOpen)}>
        <Link className="nav-link" to={menuItem.to}>
          {menuItem.caption}
        </Link>
        {menuItem.subMenu && <HSubMenu isOpen={isOpen} subMenu={menuItem.subMenu}></HSubMenu>}
      </li>
    </>
  );
};

export default HMenuItem;