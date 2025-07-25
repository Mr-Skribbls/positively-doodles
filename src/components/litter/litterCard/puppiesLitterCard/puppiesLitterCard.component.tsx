import { FC, useState } from 'react';

import './puppiesLitterCard.css';
import { LitterInfo, Puppy, PuppyStatus } from '../../../../dogInfo';
import { isNil } from 'lodash';
import Modal from '../../../modal/modal.component';
import ModalGallery from '../../../modal/templates/modalGallery/modalGallery.component';
import constants from '../../../../constants';
import ContactForm from '../../../contactForm/contactForm';
import useLitter from '../../../../hooks/useLitter';
import ProgramDescription from '../../../contentComponents/static/programDescription';
import DogShowcaseCard from '../../../dogShowcaseCard/dogShowcaseCard';

interface PuppiesLitterCardProps {
  litter: LitterInfo
}

const puppyStatus = (puppy: Puppy) => {
  return puppy.status === PuppyStatus.Reserved || puppy.status === PuppyStatus.Sold ? 'reserved' : 'available';
}

const puppyPrice = (puppy: Puppy, startingPrice: number) => {
  return puppy.status === PuppyStatus.Available ? `$${startingPrice + puppy.priceAboveStarting}` : puppy.status;
}

const PuppiesLitterCard:FC<PuppiesLitterCardProps> = ({litter}) => {
  const [modalImageNames, setModalImageNames] = useState<string[] | null>();
  const { litterDescription } = useLitter();

  const closeModal = () => {
    setModalImageNames(null);
  };

  return (
    <>
      <section className='puppies-litter-card'>
        <h2>{litter.puppyBreed.class} {litter.puppyBreed.expectedSizes.join(' to ')} {litter.puppyBreed.type} Litter</h2>
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
        <div className='litter-details-container'>
          <div className='litter-details'>
            <p>
              {litterDescription(litter)}
            </p>
            <ProgramDescription />
            <p>
              If you're interested in adopting one of these cute pups contact us using the contact form on this page, call us at <a href={`tel:${constants.phoneNumber}`}>{constants.phoneNumberDisplay}</a>, email us at <a href={`mailto:${constants.emailAddress}`}>{constants.emailAddress}</a>, or message us on <a target='_blank' href={constants.facebookAddress}>facebook</a>.
            </p>
          </div>
          <div className='contact-form'>
            <ContactForm />
          </div>
        </div>
      </section>
      <Modal isOpen={!isNil(modalImageNames)} close={closeModal}>
        {!isNil(modalImageNames) && <ModalGallery images={modalImageNames} />}
      </Modal>
    </>
  );
};

export default PuppiesLitterCard;