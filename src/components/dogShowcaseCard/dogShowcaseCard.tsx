import { FC, useEffect, useState } from 'react';
import { Puppy, Dog } from '../../dogInfo';
import SourceSetImage from '../sourceSetImage/sourceSetImage.component';
import useImageDetail, { ImageDetail } from '../../hooks/useImageDetail';
import { isEmpty, isNil } from 'lodash';
import useImage, {ImageData} from '../../hooks/useImage';
import './dogShowcaseCard.css';
import Modal from '../modal/modal.component';
import ModalImageDetail from '../modal/templates/modalImageDetail/modalImageDetail';


interface DogShowcaseCardProps {
  dog: Puppy | Dog,
  children: React.ReactNode,
}

const DogShowcaseCard:FC<DogShowcaseCardProps> = ({
  dog,
  children
}) => {
  const [ image, setImage ] = useState<ImageData>();
  const [ imageDetail, setImageDetail ] = useState<ImageDetail>();
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const { getImageDataByName } = useImage();
  const { getImageDetail } = useImageDetail();

  useEffect(() => {
    // Image Name
    let imageName = '';
    if((dog as Puppy).imageName) {
      imageName = (dog as Puppy).imageName
    } else if ((dog as Dog).images.main) {
      imageName = (dog as Dog).images.main
    }

    // Image Data
    let imageData;
    if(!isEmpty(imageName)) {
      const imageDataset = getImageDataByName([imageName]);
      imageData = !isEmpty(imageDataset) ? imageDataset[0] : undefined;
      setImage(imageData);
    }

    // Image Detail
    let imageDetail;
    if(!isNil(imageData?.detailId)) {
      imageDetail = getImageDetail(imageData.detailId);
      setImageDetail(imageDetail);
    }
  }, [dog, getImageDataByName, getImageDetail]);

  const toggleModal = () => {
    if(imageDetail) {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <figure className='dog-showcase-card'>
      {!isNil(image) && <div className='image-wrapper' onClick={() => toggleModal()}>
        <SourceSetImage imageName={image.name} sizesRules={['(max-width: 700px) 100vw','250px']} />
      </div>}
      <figcaption>
        {children}
      </figcaption>
      <Modal isOpen={isModalOpen} close={toggleModal}>
        {imageDetail && <ModalImageDetail imageDetail={imageDetail} imagePriority={[(image as ImageData).name]}></ModalImageDetail>}
      </Modal>
    </figure>
  )
}

export default DogShowcaseCard;