import { FC } from 'react';
import './hero.css';
import images from '../../services/image.service';
import HeaderLogo from '../headerLogo/headerLogo.component';


interface HeroProps {

}

const Hero:FC<HeroProps> = () => {
  return (
    <div id="hero">
      <HeaderLogo logo={images.headerLogo}></HeaderLogo>
    </div>
  );
};

export default Hero;