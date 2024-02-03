import { FC, useEffect, useState } from 'react';
import useImage, {ImageData, ImageDefinition} from '../../hooks/useImage';
import isNil from 'lodash/isNil';
import './sourceSetImage.css';

interface SourceSetImageProps {
  imageName: string
  sizesRules: string[]
  className?: string
}

const SourceSetImage:FC<SourceSetImageProps> = ({
  imageName,
  sizesRules,
  className,
}) => {
  const {getImageDataByName} = useImage();
  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    setImageData(getImageDataByName([imageName]));
  }, [imageName]);

  const getSrcSet = (imageSet: ImageDefinition[]): string => {
    return imageSet.map((image) => `${image.path} ${image.width}w`).join(',');
  }

  const getSizes = (sizesRules: string[]) => {
    return sizesRules.join(',');
  }

  const styleClasses = `source-set-image ${className}`;

  return (
    <>
      {!isNil(imageData[0]) && <img
        className={styleClasses}
        src={imageData[0].defaultPath}
        srcSet={getSrcSet(imageData[0].imageSet)}
        sizes={getSizes(sizesRules)}
        alt={imageData[0].alt}
        style={{objectPosition: `${imageData[0].centerOfFocus.x}% ${imageData[0].centerOfFocus.y}%`}} />}
    </>
  );
};

export default SourceSetImage;
