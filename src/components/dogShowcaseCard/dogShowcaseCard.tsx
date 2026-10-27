import { FC, useState } from 'react';
import { isNil } from 'lodash';
import './dogShowcaseCard.css';
import Modal from '../modal/modal.component';
import ModalImageDetail from '../modal/templates/modalImageDetail/modalImageDetail';
import ContentBlock from '../contentBlock/contentBlock';
import { BreederCentralAnimal, BreederCentralImage, ImageCenter } from '@breeder-central/ui';


interface DogShowcaseCardProps {
  dog: BreederCentralAnimal;
  children: React.ReactNode;
  [key: string]: unknown;
}

const DogShowcaseCard:FC<DogShowcaseCardProps> = ({
  dog,
  children,
  ...rest
}) => {
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const image = dog.images?.[0];

  const toggleModal = () => {
    if(image) {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <ContentBlock as='figure' className='dog-showcase-card' borderSize={1} {...rest}>
      {!isNil(image) && <div className='image-wrapper' onClick={() => toggleModal()}>
        <BreederCentralImage
          imageUrl={image.signedUrl}
          alt={image.alt}
          center={[image.centerX, image.centerY] as ImageCenter}
        />
      </div>}
      <figcaption>
        {children}
      </figcaption>
      {isModalOpen && <Modal isOpen={isModalOpen} close={toggleModal}>
        {image && <ModalImageDetail image={image} />}
      </Modal>}
    </ContentBlock>
  )
}

export default DogShowcaseCard;