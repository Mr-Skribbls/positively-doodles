import { FC, useEffect, useState } from 'react';
import random from 'lodash/random';
import isNil from 'lodash/isNil';

import './gallery.css';
import Modal from '../../components/modal/modal.component';
import ModalGallery from '../../components/modal/templates/modalGallery/modalGallery.component';
import { useParams } from 'react-router-dom';
import SourceSetImage from '../../components/sourceSetImage/sourceSetImage.component';
import useImage, { ImageData } from '../../hooks/useImage';
import { every, shuffle, some } from 'lodash';

interface GalleryProps {

}

interface DisplayImage {
  image: ImageData,
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
];

const Gallery:FC<GalleryProps> = () => {
  const {getImageDataByClassName} = useImage();
  const [displayImages, setDisplayImages] = useState<DisplayImage[]>([]);
  const [modalImageNames, setModalImageNames] = useState<string[]|null>();
  const { imageFilters } = useParams<string>();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    const filters = (imageFilters || '').split('|');
    const imagesData = shuffle(getImageDataByClassName(filters, some));
    const displayImages = imagesData.map((imageData) => {
      return {
        image: imageData,
        size: imageSizes[random(0, imageSizes.length-1)],
      };
    });
    setDisplayImages(displayImages);
  }, [imageFilters, getImageDataByClassName]);

  const getModalImages = (baseImageData: ImageData): string[] => {
    const relatedImages = getImageDataByClassName(baseImageData.classes, every);
    return [baseImageData.name, ...relatedImages.map((imageData) => imageData.name)];
  };

  const imageCard = (displayImage: DisplayImage, key: number) => {
    const sizesRules = displayImage.size === 'small' ? ['240px'] :
      displayImage.size === 'medium' ? ['480px'] :
        ['720px'];
    return (
      <div
        className={`${displayImage.size} gallery-image`}
        onClick={() => setModalImageNames(getModalImages(displayImage.image))}
        key={key}>
        <SourceSetImage imageName={displayImage.image.name} sizesRules={sizesRules} />
      </div>
    );
  };

  return (
    <div className='site-container'>
      <div className="gallery-wrapper">
        {displayImages.map((displayImage, key) => imageCard(displayImage, key))}
        <Modal isOpen={!isNil(modalImageNames)} close={() => setModalImageNames(null)}>
          {modalImageNames && <ModalGallery images={modalImageNames}></ModalGallery>}
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;