import { FC } from 'react';
// import { Link } from 'react-router-dom';
import './hMenu.css';
import { 
  MenuItem,
  sorter as sortMenuItems,
} from '../menuItems';
import HMenuItem from './hMenuItem/hMenuItem.componentt';

interface HMenuProps {
  menuItems: MenuItem[],
}

const HMenu:FC<HMenuProps> = ({
  menuItems,
}) => {
  return (
    <ul className="h-menu">
      {menuItems.sort(sortMenuItems).map((menuItem, index) => <HMenuItem key={index} menuItem={menuItem}></HMenuItem>)}
    </ul>
  );
};

export default HMenu;