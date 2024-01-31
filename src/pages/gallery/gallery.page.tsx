import { FC, useEffect, useState } from 'react';
import random from 'lodash/random';
import isNil from 'lodash/isNil';
import uniqBy from 'lodash/uniqBy';
import ReactFocusPointImage from 'react-focus-point-image';
import useImageShuffle from '../../hooks/useImageShuffle';
import useImageFilterer from '../../hooks/useImageFilterer';

import './gallery.css';
import images, { filter as imageFilter, ImageDetails } from '../../services/image.service';
// import Picture from '../../components/picture/picture.component';
import Modal from '../../components/modal/modal.component';
import ModalGallery from '../../components/modal/templates/modalGallery/modalGallery.component';
import { useParams } from 'react-router-dom';

interface GalleryProps {
  
}

interface DisplayImage {
  image: ImageDetails,
  size: string,
}

const imageSizes = [
  'small',
  'small',
  'small',
  'small',
  'medium',
  'medium',
  'medium',
]

const Gallery:FC<GalleryProps> = () => {
  const [modalImages, setModalImages] = useState<ImageDetails[]|null>();
  const [displayImages, setDisplayImages] = useState<DisplayImage[]>([]);
  const imageFilterer = useImageFilterer(images, imageFilter);
  const { imageFilters } = useParams<string>();
  const shuffledImages = useImageShuffle(imageFilterer(...(imageFilters || '').split('|')));

  useEffect(() => {
    const getRandomImageSize = () => imageSizes[random(0, imageSizes.length-1)];
    
    setDisplayImages(shuffledImages.map((i) => ({
      image: i,
      size: getRandomImageSize(),
    })));
  }, [shuffledImages]);
  
  const getModalImages = (baseImage: ImageDetails) => {
    const classes = baseImage.classes;
    const relatedImages = imageFilterer(...classes);
    return uniqBy([baseImage, ...relatedImages], 'path');
  };

  return (
    <div className='site-container'>
      <div className="gallery-wrapper">
        {displayImages.map((fi, key) => <div 
          className={fi.size + ' gallery-image'}
          onClick={() => setModalImages(getModalImages(fi.image))}
          key={key}>
          <ReactFocusPointImage
            src={fi.image.path}
            alt={fi.image.alt}
            focusPoint={[
              fi.image.centerOfFocus.x,
              fi.image.centerOfFocus.y,
            ]}
            animate />
          {/* <Picture
            image={fi.image}></Picture> */}
        </div>)}
        <Modal isOpen={!isNil(modalImages)} close={() => setModalImages(null)}>
          {modalImages && <ModalGallery images={modalImages}></ModalGallery>}
        </Modal>
      </div>
    </div>
  )
};

export default Gallery;