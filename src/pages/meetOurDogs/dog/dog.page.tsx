import { FC, useState } from 'react';
import { useParams } from 'react-router';
import { dogs } from '../../../dogInfo';
import ReactFocusPointImage from 'react-focus-point-image/dist/ReactFocusPointImage';
import useImageFilterer from '../../../hooks/useImageFilterer';
import toLower from 'lodash/toLower';

import './dog.css';
import isNil from 'lodash/isNil';
import map from 'lodash/map';
import images, { filter as imageFilter, ImageDetails } from '../../../services/image.service';
import Modal from '../../../components/modal/modal.component';
import ModalGallery from '../../../components/modal/templates/modalGallery/modalGallery.component';

interface DogProps {

}

const Dog:FC<DogProps> = () => {
  const { name } = useParams();
  const imageFilterer = useImageFilterer(images, imageFilter);
  const [modalImages, setModalImages] = useState<ImageDetails[]|null>();
  
  const dogImages = imageFilterer(toLower(name));
  const dog = dogs.find((d) => d.name === name);

  const getModalImages = (baseImage: ImageDetails) => {
    const otherImages = dogImages.filter((image) => image !== baseImage);
    return [baseImage, ...otherImages];
  }

  return (
    <div className="dog-page site-container">
      {dog && <div>
        <h1>{dog.name}</h1>

        <section className='images'>
          {dogImages.map((image, key) => <div onClick={() => setModalImages(getModalImages(image))}>
            <ReactFocusPointImage
            key={key}
            src={image.path}
            alt={image.alt}
            focusPoint={[
              image.centerOfFocus.x,
              image.centerOfFocus.y,
            ]}
            animate />
          </div>)}
        </section>

        <section>
          <h2>Description</h2>
          <p>{dog.description}</p>
        </section>

        <section className='testing'>
          <h2>Testing</h2>
          <div className="ofa-testing">
            <h3>OFA Testing</h3>
            <ul>
              <li>
                <span>Elbows: </span>
                {dog.testing.OFA.elbows}
              </li>
              <li>
                <span>Eyes: </span>
                {dog.testing.OFA.eyes}
              </li>
              <li>
                <span>Hips: </span>
                {dog.testing.OFA.hips}
              </li>
              <li>
                <span>Patellas: </span>
                {dog.testing.OFA.patellas}
              </li>
              <li>
                <span>Heart: </span>
                {dog.testing.OFA.heart}
              </li>
              <li>
                <span>Thyroid: </span>
                {dog.testing.OFA.thyroid}
              </li>
            </ul>
          </div>
          {!isNil(dog.testing.genetics) && <div className="genetic-testing">
            <h3>Genetic Testing</h3>
            <section className='health-testing'>
              <h4>Health Testing</h4>
              <ul>
                {map(dog.testing.genetics.healthTesting, (trait, key) => <li key={key}>
                  <span>{trait.disease}: </span>
                  {trait.result}
                </li>)}
              </ul>
            </section>
            <section className="trait-testing">
              <h4>Trait Testing</h4>
              <ul>
                {map(dog.testing.genetics.traitTesting, (trait, key) => <li key={key}>
                  <span>{key}: </span>
                  {trait?.result} - {trait?.desc}
                </li>)}
              </ul>
            </section>
          </div>}
        </section>
      </div>}
      <Modal isOpen={!isNil(modalImages)} close={() => setModalImages(null)}>
        {modalImages && <ModalGallery images={modalImages} />}
      </Modal>
    </div>
  );
};

export default Dog;