import { FC, useEffect, useState } from 'react';
import useImage, {ImageData, ImageDefinition} from '../../hooks/useImage';
import isNil from 'lodash/isNil';
import './sourceSetImage.css';
import { compact, isEmpty, reverse, sortedUniq, uniq } from 'lodash';

interface SourceSetImageProps {
  imageName: string
  className?: string
}

const SourceSetImage:FC<SourceSetImageProps> = ({
  imageName,
  className,
}) => {
  const { getImageDataByName } = useImage();
  const [ imageData, setImageData ] = useState<ImageData[]>([]);
  const [ sizeRules, setSizeRules ] = useState<string>('');

  useEffect(() => {
    setImageData(getImageDataByName([imageName]));
  }, [imageName, getImageDataByName]);

  useEffect(() => {
    let sizeRules = '';
    if(!isEmpty(imageData)) {
      const imageSizes = reverse(sortedUniq(compact(imageData[0].imageSet.map((image) => image.width).sort((a, b) => a - b))));
      console.log(imageSizes);
      const rules = imageSizes.map((size) => {
        return `(min-width: ${size}px) ${size}px`;
      });
      sizeRules = rules.join(',');
    }
    setSizeRules(sizeRules);
  }, [imageData]);

  const getSrcSet = (imageSet: ImageDefinition[]): string => {
    const res = imageSet.map((image) => {
      return `${image.path} ${image.width}w`;
    }).join(',');
    return res;
  }

  const styleClasses = `source-set-image ${className}`;

  return (
    <>
      {!isNil(imageData[0]) && <img
        loading='lazy'
        className={styleClasses}
        src={imageData[0].defaultPath}
        srcSet={getSrcSet(imageData[0].imageSet)}
        sizes={sizeRules}
        alt={imageData[0].alt}
        style={{objectPosition: `${imageData[0].centerOfFocus.x}% ${imageData[0].centerOfFocus.y}%`}} />}
    </>
  );
};

export default SourceSetImage;
