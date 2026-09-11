import { FC, memo, useEffect, useMemo, useState } from 'react';
import isNil from 'lodash/isNil';

import './gallery.css';
import Modal from '../../components/modal/modal.component';
import ModalImageDetail from '../../components/modal/templates/modalImageDetail/modalImageDetail';
import ContentBlock from '../../components/contentBlock/contentBlock';
import { Helmet } from 'react-helmet';
import constants from '../../constants';
import { AnimalImage, BreederCentralImage, ImageCenter, OffspringImage } from '@breeder-central/ui';
import useAnimalDetails from '../../hooks/useAnimalDetails';
import { random, shuffle } from 'lodash';

interface GalleryProps {

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

interface GalleryGridProps {
  images: (AnimalImage | OffspringImage)[];
  onImageClick: (image: AnimalImage | OffspringImage) => void;
}

const GalleryGrid: FC<GalleryGridProps> = memo(({ images, onImageClick }) => {
  return (
    <div className="gallery-wrapper">
      {images.map((image, key) => (
        <div
          className={`${imageSizes[random(0, imageSizes.length-1)]} gallery-image`}
          onClick={() => onImageClick(image)}
          key={key}
        >
          <BreederCentralImage
            imageUrl={image.signedUrl}
            alt={image.alt}
            center={[image.centerX, image.centerY] as ImageCenter}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ))}
    </div>
  );
});

const Gallery:FC<GalleryProps> = () => {
  const [ selectedImage, setSelectedImage ] = useState<AnimalImage | OffspringImage | null>(null);
  // const { imageFilters } = useParams<string>();
  const { animalImages, offspringImages } = useAnimalDetails();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  // todo: add: filter images by imageFilters.

  const images = useMemo(() => {
    return shuffle([
      ...animalImages,
      ...offspringImages,
    ]);
  }, [animalImages, offspringImages]);

  const closeModal = () => {
    setSelectedImage(null);
  }

  return (
    <div className='site-container'>
      <Helmet>
        <title>{constants.companyName} Gallery</title>
        <meta name='keywords' content='doodle puppy gallery, doodle dog pictures, doodle puppy photos, doodle puppies gallery, doodle puppy pictures, bernedoodle puppy photos, adorable doodle puppy pictures, cute doodle puppy gallery, fluffy doodle dog photos, playful doodle puppies, doodle puppy cuteness overload' />
        <meta name='description' content='Explore our gallery of positively adorable puppies' />
      </Helmet>
      <ContentBlock as='p' className='gallery-instructions' borderSize={1} borderRadius={5}>
        Click or tap on an image for more details
      </ContentBlock>
      <GalleryGrid images={images} onImageClick={setSelectedImage} />
      <Modal isOpen={!isNil(selectedImage)} close={closeModal}>
        {selectedImage && <ModalImageDetail image={selectedImage}></ModalImageDetail>}
      </Modal>
    </div>
  );
};

export default Gallery;