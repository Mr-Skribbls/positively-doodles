import { FC } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './modalGallery.css';
import useImage, { ImageData } from '../../../../hooks/useImage';
import isEmpty from 'lodash/isEmpty';

interface ModalGalleryProps {
  images: string[],
}

const ModalGallery:FC<ModalGalleryProps> = ({
  images,
}) => {
  const {getImageDataByName, findImageDefinition} = useImage();

  const sortCondition = (a: ImageData, b: ImageData) => {
    const aIdx = images.indexOf(a.name);
    const bIdx = images.indexOf(b.name);
    return aIdx < bIdx ? -1 : aIdx > bIdx ? 1 : 0;
  };

  const galleryImages = getImageDataByName(images).sort(sortCondition).map((imageData) => {
    const imageDefinition = findImageDefinition(imageData.imageSet)({
      type: 'png',
    });

    return {
      original: imageDefinition?.path || '',
    };
  }).filter((a) => !isEmpty(a.original));

  return (
    <div className='modal-gallery-container'>
      <ImageGallery items={galleryImages}></ImageGallery>
    </div>
  )
}

export default ModalGallery;