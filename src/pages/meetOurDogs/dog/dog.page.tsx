import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { dogs } from '../../../dogInfo';

import './dog.css';
import isNil from 'lodash/isNil';
import Modal from '../../../components/modal/modal.component';
import ModalGallery from '../../../components/modal/templates/modalGallery/modalGallery.component';
import SourceSetImage from '../../../components/sourceSetImage/sourceSetImage.component';
import useImage, { ImageData } from '../../../hooks/useImage';
import PDFViewer from '../../../components/pdfViewer/pdfViewer.component';

interface DogProps {

}

const Dog:FC<DogProps> = () => {
  const { name } = useParams();
  const [modalImages, setModalImages] = useState<string[] | null>();
  const {getImageDataByName} = useImage();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  const dog = dogs.find((d) => d.name === name);

  const mainImageName = isNil(dog?.images.main) ? [] : [dog.images.main];
  const galleryImageNames = dog?.images.gallery || [];
  const imageNames = getImageDataByName([...mainImageName, ...galleryImageNames]).map((imageData: ImageData) => imageData.name);

  const getModalImages = (imageName: string, imageNames: string[]) => {
    const otherNames = imageNames.filter((name) => name !== imageName);
    return [imageName, ...otherNames];
  }

  return (
    <div className="dog-page site-container">
      {dog && <div>
        <h1>{dog.name}</h1>

        <section className='images'>
          {imageNames.map((imageName, key) => <div key={key} onClick={() => setModalImages(getModalImages(imageName, imageNames))}>
            <SourceSetImage imageName={imageName} />
          </div>)}
        </section>

        <section>
          <h2>Description</h2>
          <p>{dog.description}</p>
        </section>

        {!isNil(dog.testing) && <section className='testing'>
          <h2>Testing</h2>
          {!isNil(dog.testing.OFA) && <div className="ofa-testing">
            <h3>OFA Testing</h3>
            <ul>
              {!isNil(dog.testing.OFA.canineHealth) && <li>
                <PDFViewer title='Canine Health' pdfPath={dog.testing.OFA.canineHealth} />
              </li>}
              {!isNil(dog.testing.OFA.elbows) && <li>
                <PDFViewer title='Elbows' pdfPath={dog.testing.OFA.elbows} />
              </li>}
              {!isNil(dog.testing.OFA.eyes) && <li>
                <PDFViewer title='Eyes' pdfPath={dog.testing.OFA.eyes} />
              </li>}
              {!isNil(dog.testing.OFA.hips) && <li>
                <PDFViewer title='Hips' pdfPath={dog.testing.OFA.hips} />
              </li>}
              {!isNil(dog.testing.OFA.heart) && <li>
                <PDFViewer title='Heart' pdfPath={dog.testing.OFA.heart} />
              </li>}
              {!isNil(dog.testing.OFA.thyroid) && <li>
                <PDFViewer title='Thyroid' pdfPath={dog.testing.OFA.thyroid} />
              </li>}
            </ul>
          </div>}
          {!isNil(dog.testing.genetics) && <div className="genetic-testing">
            <h3>Genetic Testing</h3>
            <section className='health-testing'>
              <PDFViewer title={dog.testing.genetics.company} pdfPath={dog.testing.genetics.path} />
            </section>
          </div>}
        </section>}
      </div>}
      <Modal isOpen={!isNil(modalImages)} close={() => setModalImages(null)}>
        {modalImages && <ModalGallery images={modalImages} />}
      </Modal>
    </div>
  );
};

export default Dog;