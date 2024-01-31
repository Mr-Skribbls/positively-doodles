import './footer.css';
import { FC } from 'react';
import constants from '../../constants';
import isEmpty from 'lodash/isEmpty';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import images from '../../services/image.service';
import Picture from '../picture/picture.component';
import SocialIcon from '../socialIcon/socialIcon.component';

interface FooterProps {

}

const Footer:FC<FooterProps> = () => {
  const windowDimensions = useWindowDimensions();

  const iconColor = '#2A1D14'

  return (
    <footer>
      <div className='social-media-container'>
        {!isEmpty(constants.facebookAddress) && <a rel='noreferrer' target='_blank' href={constants.facebookAddress}>
          <SocialIcon name='facebook' color={iconColor} size={35} />
        </a>}
        {!isEmpty(constants.youtubeAddress) && <a rel='noreferrer' target='_blank' href={constants.youtubeAddress}>
          <SocialIcon name='youtube' color={iconColor} size={35} />
        </a>}
        {!isEmpty(constants.instagramAddress) && <a rel='noreferrer' target='_blank' href={constants.instagramAddress}>
          <SocialIcon name='instagram' color={iconColor} size={35} />
        </a>}
        {!isEmpty(constants.pinterestAddress) && <a rel='noreferrer' target='_blank' href={constants.pinterestAddress}>
          <SocialIcon name='pinterest' color={iconColor} size={35} />
        </a>}
      </div>
      {windowDimensions.width > 650 && <div className='logo-container'>
        <Picture className='logo' image={images['smallLogo']} />
      </div>}
      <div className='contact-info-container'>
        <a href={`mailto:${constants.emailAddress}`}>{constants.emailAddress}</a>
      </div>
    </footer>
  )
};

export default Footer;