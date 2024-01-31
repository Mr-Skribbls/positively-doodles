import { FC } from 'react';
import './hSubMenu.css';
import {
  SubMenu,
  sorter as sortMenuItems
} from '../../menuItems';
import HMenuItem from '../hMenuItem/hMenuItem.Component';

interface HSubMenuProps {
  subMenu: SubMenu,
  isOpen: boolean,
}

const HSubMenu:FC<HSubMenuProps> = ({subMenu, isOpen}) => {
  let className = 'nav-menu sub-menu';
  if(isOpen) className += ' active';

  return (
    <ul className={className}>
      {subMenu.menuItems.sort(sortMenuItems).map((menuItem, index) => <HMenuItem key={index} menuItem={menuItem}></HMenuItem>)}
    </ul>
  );
};

export default HSubMenu;