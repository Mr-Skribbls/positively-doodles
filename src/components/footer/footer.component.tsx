import './footer.css';
import { FC, useEffect, useState } from 'react';
import constants from '../../constants';
import isEmpty from 'lodash/isEmpty';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import SocialIcon from '../socialIcon/socialIcon.component';
import SourceSetImage from '../sourceSetImage/sourceSetImage.component';
import Copyright from '../copyright/copyright';
import useImage from '../../hooks/useImage';
import { isNil } from 'lodash';

interface FooterProps {

}

const Footer:FC<FooterProps> = () => {
  const windowDimensions = useWindowDimensions();
  const { requestSupabaseImage, requestSupabaseAnimalData } = useImage();
  const [ imageURL, setImageURL ] = useState<string>('');
  const [ animal, setAnimal ] = useState<{
    description?: string; 
    gender?: 'M' | 'F';
    id?: 5;
    imageIds?: string[];
    name?: string;
    state?: string;
  }>({});

  // const iconColor = '#2A1D14'
  const iconColor = '#F2F2F2';

  useEffect(() => {
    requestSupabaseAnimalData(7).then((animal) => {
      console.log('animal: ', animal);
      setAnimal(animal);
    });
  }, [requestSupabaseAnimalData]);

  useEffect(() => {
    if(!isNil(animal?.imageIds)) {
      const imagePromise = requestSupabaseImage(animal.imageIds[0]);
      imagePromise.then((imageURL) => {
        setImageURL(imageURL);
      });
    } else {
      setImageURL('');
    }
  }, [animal.imageIds, requestSupabaseImage, setImageURL]);

  return (
    <footer>
      <img src={imageURL} />
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
          <SourceSetImage className='logo' imageName='smallLogo' />
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