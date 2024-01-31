import {FC} from 'react';
import './picture.css';
import { ImageDetails } from '../../services/image.service';
import Source from './source/source.component';

interface PictureProps {
  image: ImageDetails,
  className?: string,
}

const Picture:FC<PictureProps> = ({image, className}) => {
  const img = <img src={image.path} alt={image.alt} className={className} />;
  return (
    <picture className={className}>
      {image.picture?.sources.map((source, key) => <Source key={key} source={source}></Source>)}
      {img}
    </picture>
  )
};

export default Picture;