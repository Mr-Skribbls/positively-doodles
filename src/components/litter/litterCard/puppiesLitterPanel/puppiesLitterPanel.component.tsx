import { FC, useState } from 'react';

import './puppiesLitterPanel.css';
import { LitterInfo, Puppy, PuppyStatus } from '../../../../dogInfo';
import { isEmpty, isNil } from 'lodash';
import Modal from '../../../modal/modal.component';
import ModalGallery from '../../../modal/templates/modalGallery/modalGallery.component';
import useLitter from '../../../../hooks/useLitter';
import DogShowcaseCard from '../../../dogShowcaseCard/dogShowcaseCard';
import ContentBlock from '../../../contentBlock/contentBlock';

interface PuppiesLitterPanelProps {
  litter: LitterInfo
}

const puppyStatus = (puppy: Puppy) => {
  return puppy.status === PuppyStatus.Reserved || puppy.status === PuppyStatus.Sold ? 'reserved' : 'available';
}

const puppyPrice = (puppy: Puppy, startingPrice: number) => {
  return puppy.status === PuppyStatus.Available ? `$${startingPrice + puppy.priceAboveStarting}` : puppy.status;
}

const PuppiesLitterPanel:FC<PuppiesLitterPanelProps> = ({litter}) => {
  const [modalImageNames, setModalImageNames] = useState<string[] | null>();
  const { litterDescription, priceDisclaimer } = useLitter();

  const closeModal = () => {
    setModalImageNames(null);
  };

  return (
    <>
      <ContentBlock as='section' className='puppies-litter-card'>
        <h2>{litter.puppyBreed.class} {litter.puppyBreed.expectedSizes.join(' to ')} {litter.puppyBreed.type} Litter</h2>
        <p>{litterDescription(litter)}</p>
        { !isNil(litter.puppies) && !isEmpty(litter.puppies) &&
          <p className='price-disclaimer'>{priceDisclaimer()}</p>
        }
        <div className='puppy-cards'>
          {!isNil(litter.puppies) && litter.puppies.map(
            (puppy, key) => (
              <DogShowcaseCard key={key} dog={puppy}>
                <h4>{puppy.name}</h4>
                <p className={puppyStatus(puppy)}>{puppyPrice(puppy, litter.startingPrice)}</p>
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