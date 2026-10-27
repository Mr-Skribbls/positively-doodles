import { FC, useState } from 'react';

import './puppiesLitterPanel.css';
import { isEmpty, isNil } from 'lodash';
import Modal from '../../../modal/modal.component';
import ModalGallery from '../../../modal/templates/modalGallery/modalGallery.component';
import useLitter from '../../../../hooks/useLitter';
import DogShowcaseCard from '../../../dogShowcaseCard/dogShowcaseCard';
import ContentBlock from '../../../contentBlock/contentBlock';
import { BreederCentralAnimal, BreederCentralOffspringGroup } from '@breeder-central/ui';

interface PuppiesLitterPanelProps {
  litter: BreederCentralOffspringGroup;
}

const puppyStatus = (puppy: BreederCentralAnimal) => {
  return puppy.state === 'Pet' ? 'reserved' : 'available';
};

const puppyPrice = (puppy: BreederCentralAnimal) => {
  return puppy.state === 'Puppy' ? `$${puppy.price}` : 'Found forever home';
};

const PuppiesLitterPanel:FC<PuppiesLitterPanelProps> = ({litter}) => {
  const [ modalImageNames, setModalImageNames ] = useState<string[] | null>();
  const {
    litterDescription2: litterDescription,
    priceDisclaimer,
    litterParentText,
    litterPuppies,
  } = useLitter(litter);

  const closeModal = () => {
    setModalImageNames(null);
  };

  return (
    <>
      <ContentBlock as='section' className='puppies-litter-card'>
        <h2>{ litterParentText } Litter</h2>
        <p>{ litterDescription }</p>
        { !isNil(litterPuppies) && !isEmpty(litterPuppies) &&
          <p className='price-disclaimer'>{priceDisclaimer()}</p>
        }
        <div className='puppy-cards'>
          {!isNil(litterPuppies) && litterPuppies.map(
            (puppy, key) => (
              <DogShowcaseCard key={key} dog={puppy}>
                <h4>{puppy.name}</h4>
                { puppy.price && <p className={puppyStatus(puppy)}>{puppyPrice(puppy)}</p> }
                <p>{puppy.gender === "M" ? "Boy" : "Girl"}</p>
                <p>{puppy.description}</p>
              </DogShowcaseCard>
            ))}
        </div>
      </ContentBlock>
      <Modal isOpen={!isNil(modalImageNames)} close={closeModal}>
        {!isNil(modalImageNames) && <ModalGallery images={modalImageNames} />}
      </Modal>
    </>
  );
};

export default PuppiesLitterPanel;