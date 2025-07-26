import { FC, useEffect, useState } from 'react';
import random from 'lodash/random';
import isNil from 'lodash/isNil';

import './gallery.css';
import Modal from '../../components/modal/modal.component';
import { useParams } from 'react-router-dom';
import SourceSetImage from '../../components/sourceSetImage/sourceSetImage.component';
import useImage, { ImageData } from '../../hooks/useImage';
import { shuffle, some } from 'lodash';
import useImageDetail, { ImageDetail } from '../../hooks/useImageDetail';
import ModalImageDetail from '../../components/modal/templates/modalImageDetail/modalImageDetail';
import ContentBlock from '../../components/contentBlock/contentBlock';

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
  const [ modalImageDetail, setModalImageDetail ] = useState<ImageDetail>();
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

  const imageCard = (displayImage: DisplayImage, key: number) => {
    return (
      <div
        className={`${displayImage.size} gallery-image`}
        onClick={() => {
          if(displayImage.detailId) {
            const modalImageDetail = getImageDetail(displayImage.detailId) as ImageDetail;
            setModalImageDetail(modalImageDetail);
          }
          setSelectedImageName(displayImage.image.name);
        }}
        key={key}>
        <SourceSetImage imageName={displayImage.image.name} />
      </div>
    );
  };

  const closeModal = () => {
    setModalImageDetail(undefined);
    setSelectedImageName('');
  }

  return (
    <div className='site-container'>
      <ContentBlock as='p' className='gallery-instructions' borderSize={1} borderRadius={5}>
        Click or tap on an image for more details
      </ContentBlock>
      <div className="gallery-wrapper">
        {displayImages.map((displayImage, key) => imageCard(displayImage, key))}
        <Modal isOpen={!isNil(modalImageDetail)} close={closeModal}>
          {modalImageDetail && <ModalImageDetail imageDetail={modalImageDetail} imagePriority={[selectedImageName]}></ModalImageDetail>}
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;