import { FC } from 'react';
import './headerLogo.css';
import SourceSetImage from '../sourceSetImage/sourceSetImage.component';

interface HeaderLogoProps {
  
}

const HeaderLogo:FC<HeaderLogoProps> = () => {
  return (
    <div className="header-logo wrapper">
      <div className='header-logo container'>
        <SourceSetImage imageName='headerLogo' sizesRules={['298px']} />
      </div>
    </div>
  );
};

export default HeaderLogo;