import { isNil } from 'lodash';
import SourceSetImage from '../sourceSetImage/sourceSetImage.component';
import './imageSwitcher.css';
import { FC, useEffect, useState } from 'react';

interface ImageSwitcherProps {
  imageName: string
  sizesRules: string[]
}

const ImageSwitcher:FC<ImageSwitcherProps> = ({
  imageName,
  sizesRules,
}) => {
  const [currentImage, setCurrentImage] = useState<string | undefined>();
  const [isImageChanging, setIsImageChanging] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsImageChanging(true);
      setTimeout(() => {
        setCurrentImage(imageName);
        setTimeout(() => setIsImageChanging(false), 10); // Time after the switch occurs
      }, 1000); // Time while the switch occurs. 
    }, 2000); // Time before switch occurs. This will give the new image time to render before switching.
  }, [imageName, setCurrentImage, setIsImageChanging]);

  return (
    <div className="image-switcher">
      <div className={`slider ${isImageChanging ? 'sliding' : ''}`}>
        <div className='image-wrapper'>
          {!isNil(currentImage) && <SourceSetImage imageName={currentImage} sizesRules={sizesRules} />}
        </div>
        <div className="image-wrapper">
          <SourceSetImage imageName={imageName} sizesRules={sizesRules} />
        </div>
      </div>
    </div>
  );
};

export default ImageSwitcher;