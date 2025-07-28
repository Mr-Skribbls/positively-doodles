import { isNil } from 'lodash';
import SourceSetImage from '../sourceSetImage/sourceSetImage.component';
import './imageSwitcher.css';
import { FC, useState } from 'react';

interface ImageSwitcherProps {
  imageName: string
}

const ImageSwitcher:FC<ImageSwitcherProps> = ({
  imageName,
}) => {
  const [currentImage, setCurrentImage] = useState<string>();
  const [isImageChanging, setIsImageChanging] = useState(false);

  const changeImage = () => {
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentImage(imageName);
      setTimeout(() => setIsImageChanging(false), 10);
    }, 1000);
  }

  const nextImageLoaded = () => {
    changeImage();
  }

  return (
    <div className="image-switcher">
      <div className={`slider ${isImageChanging ? 'sliding' : ''}`}>
        <div className='image-wrapper'>
          {!isNil(currentImage) && <SourceSetImage imageName={currentImage} loading='eager' />}
        </div>
        <div className="image-wrapper next-image">
          <SourceSetImage imageName={imageName} loading='eager' onLoad={nextImageLoaded} />
        </div>
      </div>
    </div>
  );
};

export default ImageSwitcher;