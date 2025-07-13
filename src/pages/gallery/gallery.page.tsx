import { FC, useEffect, useState } from 'react';
import random from 'lodash/random';
import isNil from 'lodash/isNil';

import './gallery.css';
import Modal from '../../components/modal/modal.component';
import ModalGallery from '../../components/modal/templates/modalGallery/modalGallery.component';
import { useParams } from 'react-router-dom';
import SourceSetImage from '../../components/sourceSetImage/sourceSetImage.component';
import useImage, { ImageData } from '../../hooks/useImage';
import { every, isEmpty, shuffle, some } from 'lodash';
import useImageDetail, { DetailRecordType, DogImageDetail } from '../../hooks/useImageDetail';
import ModalDogImageDetail from '../../components/modal/templates/modalDogImageDetail/modalDogImageDetail';

interface GalleryProps {

}

interface DisplayImage {
  image: ImageData,
  detailId?: string,
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
  const [ displayImages, setDisplayImages ] = useState<DisplayImage[]>([]);
  const [ modalImageNames, setModalImageNames ] = useState<string[]>([]);
  const [ modalImageDetail, setModalImageDetail ] = useState<DogImageDetail>();
  const [ selectedImageName, setSelectedImageName ] = useState<string>('');
  const { imageFilters } = useParams<string>();
  const { getImageDataByClassName } = useImage();
  const { getImageDetail } = useImageDetail();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    const filters = (imageFilters || '').split('|');
    const imagesData = shuffle(getImageDataByClassName(filters, some));
    const displayImages = imagesData.map((imageData) => {
      return {
        image: imageData,
        detailId: imageData.detailId,
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
        onClick={() => {
          if(displayImage.detailId) {
            const modalImageDetail = getImageDetail(displayImage.detailId) as DogImageDetail;
            setModalImageDetail(modalImageDetail);
          } else {
            setModalImageNames(getModalImages(displayImage.image))
          }
          setSelectedImageName(displayImage.image.name);
        }}
        key={key}>
        <SourceSetImage imageName={displayImage.image.name} sizesRules={sizesRules} />
      </div>
    );
  };

  const closeModal = () => {
    setModalImageNames([]);
    setModalImageDetail(undefined);
    setSelectedImageName('');
  }

  return (
    <div className='site-container'>
      <div className="gallery-wrapper">
        {displayImages.map((displayImage, key) => imageCard(displayImage, key))}
        <Modal isOpen={!isEmpty(modalImageNames)} close={closeModal}>
          {modalImageNames && <ModalGallery images={modalImageNames}></ModalGallery>}
        </Modal>
        <Modal isOpen={!isNil(modalImageDetail)} close={closeModal}>
          {modalImageDetail?.type === DetailRecordType.Dog && 
            <ModalDogImageDetail dogImageDetail={modalImageDetail} imagePriority={[selectedImageName]}></ModalDogImageDetail>
          }
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;