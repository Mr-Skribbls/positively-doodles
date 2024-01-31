import { FC } from 'react';
import './headerLogo.css';
import { ImageDetails } from '../../services/image.service';
import Picture from '../picture/picture.component';

interface HeaderLogoProps {
  logo: ImageDetails,
}

const HeaderLogo:FC<HeaderLogoProps> = ({logo}) => {
  return (
    <div className="header-logo-container">
      <Picture image={logo} className="logo-image"></Picture>
    </div>
  );
};

export default HeaderLogo;