import './footer.css';
import { FC } from 'react';
import constants from '../../constants';
import isEmpty from 'lodash/isEmpty';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SocialIcon from '../socialIcon/socialIcon.component';
import SourceSetImage from '../sourceSetImage/sourceSetImage.component';
import Copyright from '../copyright/copyright.component';

interface FooterProps {

}

const Footer:FC<FooterProps> = () => {
  const windowDimensions = useWindowDimensions();

  // const iconColor = '#2A1D14'
  const iconColor = '#F2F2F2';

  return (
    <footer>
      <div className='footer-row'>
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
          <SourceSetImage className='logo' imageName='smallLogo' sizesRules={['100px']} />
        </div>}
        <div className='contact-info-container'>
          <p><a href={`mailto:${constants.emailAddress}`}>{constants.emailAddress}</a></p>
          <p><a href={`tel:${constants.phoneNumber}`}>{constants.phoneNumberDisplay}</a></p>
        </div>
      </div>
      <div className='footer-row'>
        <Copyright />
      </div>
    </footer>
  )
};

export default Footer;