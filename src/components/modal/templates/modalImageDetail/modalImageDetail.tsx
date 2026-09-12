import './modalImageDetail.css';
import { FC, useMemo } from 'react';
import { orderBy } from 'lodash';
import ShowcaseCarousel from '../../../carousels/showcaseCarousel/showcaseCarousel';
import ContentBlock from '../../../contentBlock/contentBlock';
import { AnimalImage, OffspringImage } from '@breeder-central/ui';
import useAnimalDetails from '../../../../contexts/animalDetails/animalDetails.context';
import ModalLitterImageDetail from './modalLitterImageDetail';
import ModalDogImageDetail from './modalDogImageDetail';

interface ModalImageDetailProps {
  image: AnimalImage | OffspringImage | null,
}

const ModalImageDetail:FC<ModalImageDetailProps> = ({
  image,
}) => {
  const { animals, offspringGroups } = useAnimalDetails();

  // The image litter.
  const litter = useMemo(() => {
    const offspringGroupId = image && 'offspringGroupId' in image
      ? image.offspringGroupId
      : null;

    return offspringGroups.find((group) => group.id === offspringGroupId) ?? null;
  }, [image, offspringGroups]);

  // The image dog.
  const dog = useMemo(() => {
    if(litter) return null;
    const animalId = image && 'animalId' in image
      ? image.animalId
      : null;
    return animals.find((animal) => animal.id === animalId) ?? null;
  }, [animals, image, litter]);

  const images = useMemo(() => {
    const animalId = image && 'animalId' in image ? image.animalId : null;
    const animal = animals.find((animal) => animal.id === animalId) ?? null;
    const animalImages = orderBy(animal?.images ?? [], (relatedImage) => {
      return relatedImage.id === image?.id ? 0 : 1;
    });

    const litterId = image && 'offspringGroupId' in image ? image.offspringGroupId : null;
    const litter = offspringGroups.find((group) => group.id === litterId) ?? null;
    const litterImages = orderBy(litter?.images ?? [], (relatedImage) => {
      return relatedImage.id === image?.id ? 0 : 1;
    });

    return [
      ...litterImages,
      ...animalImages,
    ];
  }, [image, animals, offspringGroups]);
  
  return (
    <ContentBlock className='model-image-detail'>
      <div className="image-wrapper">
        <ShowcaseCarousel images={images}></ShowcaseCarousel>
      </div>
      { litter && <ModalLitterImageDetail litter={litter} /> }
      { dog && <ModalDogImageDetail dog={dog} /> }
    </ContentBlock>
  )
}

export default ModalImageDetail;