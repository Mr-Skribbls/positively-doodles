import { FC, useState } from 'react';

import './puppiesLitterCard.css';
import { LitterInfo, Puppy, PuppyStatus } from '../../../../dogInfo';
import { every, isNil } from 'lodash';
import SourceSetImage from '../../../sourceSetImage/sourceSetImage.component';
import Modal from '../../../modal/modal.component';
import ModalGallery from '../../../modal/templates/modalGallery/modalGallery.component';
import useImage, {ImageData} from '../../../../hooks/useImage';
import constants from '../../../../constants';
import ContactForm from '../../../contactForm/contactForm';
import { Link } from 'react-router-dom';

interface PuppiesLitterCardProps {
  litter: LitterInfo
}

const puppyCard = (puppy: Puppy, startingPrice: number, openModalCB:(imageName: string) => void, key: number) => {
  const statusClass = puppy.status === PuppyStatus.Reserved || puppy.status === PuppyStatus.Sold ? 'reserved' : 'available';
  const price = puppy.status === PuppyStatus.Available ? `$${startingPrice + puppy.priceAboveStarting}` : puppy.status;
  return (
    <figure key={key} className='puppy-card'>
      <div className='image-wrapper' onClick={() => openModalCB(puppy.imageName)}>
        <SourceSetImage imageName={puppy.imageName} sizesRules={['(max-width: 700px) 100vw','250px']} />
      </div>
      <figcaption>
        <h4>{puppy.name}</h4>
        <p className={statusClass}>{price}</p>
        <p>{puppy.gender === "M" ? "Boy" : "Girl"}</p>
        <p>{puppy.description}</p>
      </figcaption>
    </figure>
  );
};

const PuppiesLitterCard:FC<PuppiesLitterCardProps> = ({litter}) => {
  const {getImageDataByClassName, getImageDataByName} = useImage();
  const [modalImageNames, setModalImageNames] = useState<string[] | null>();

  const getModalImageNames = (baseImageData: ImageData): string[] => {
    const relatedImages = getImageDataByClassName(baseImageData.classes, every);
    return [baseImageData.name, ...relatedImages.map((imageData) => imageData.name)];
  };

  const openModal = (baseImageName: string): void => {
    const baseImageData = getImageDataByName([baseImageName])[0];
    setModalImageNames(getModalImageNames(baseImageData));
  };

  const closeModal = () => {
    setModalImageNames(null);
  };

  return (
    <>
      <section className='puppies-litter-card'>
        <h2>{litter.puppyBreed.class} {litter.puppyBreed.expectedSizes.join(' to ')} {litter.puppyBreed.type} Litter</h2>
        {/* {!isNil(litter.goHomeDate) && <span>Go home date: {dateHelper.hyphenatedDate(litter.goHomeDate)}</span>} */}
        <div className='puppy-cards'>
          {!isNil(litter.puppies) && litter.puppies.map((puppy, key) => puppyCard(puppy, litter.startingPrice, openModal, key))}
        </div>
        <div className='litter-details-container'>
          <div className='litter-details'>
            <p>
              We welcomed {litter.size} adorable {litter.puppyBreed.expectedSizes.join(' to ')} {litter.puppyBreed.type} puppies{litter.birthDate && ` on ${litter.birthDate.toDateString()}`}. {litter.dam.name} and {litter.sire.name} had {litter.puppies?.filter((p) => p.gender === 'F').length} beautiful girls and {litter.puppies?.filter((p) => p.gender === 'M').length} handsome boys. These cute pups will be ready to go to their new loving homes on {litter.goHomeDate?.toDateString()}.
            </p>
            <p>
              All of our dogs and puppies are raised in our home. We love and care for each of them. Puppy training begins when they are 3 days old with ENS (Early Neurological Stimulation) and ESI (Early Scent Introduction). These stimulations help develop resilience, coping mechanisms, a strong neurological system, and nose awareness. It is a gentile experience for them to learn and prepares them to be exceptional companions. On day 16 they begin early potty and crate training. Once eyes and ears open we start desensitizing to sounds and textures. These trainings progressively increase as they develop and progress. We continue them until your puppy goes home with you. We are partners with BAXTER and Bella. This program can help you build on this training so your puppy grows into a wonderful companion. <Link to="../baxter-and-bella">Click here to learn more about BAXTER and Bella </Link>
            </p>
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