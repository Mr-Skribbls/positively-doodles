import { FC } from 'react';
import './header.css';
import Hero from '../hero/hero.component';
import UnderConstruction from '../underConstruction/underConstruction.component';


interface HeaderProps {

}

const Header:FC<HeaderProps> = () => {
  return (
    <header id="header">
      <Hero></Hero>
      <UnderConstruction></UnderConstruction>
    </header>
  );
};

export default Header;