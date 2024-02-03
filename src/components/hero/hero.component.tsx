import { FC } from 'react';
import './hero.css';
import HeaderLogo from '../headerLogo/headerLogo.component';


interface HeroProps {

}

const Hero:FC<HeroProps> = () => {
  return (
    <div id="hero">
      <HeaderLogo></HeaderLogo>
    </div>
  );
};

export default Hero;