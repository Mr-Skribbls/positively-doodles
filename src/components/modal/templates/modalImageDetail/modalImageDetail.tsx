import './modalImageDetail.css';
import { FC, useEffect, useState } from 'react';
import { 
  DetailRecordType, 
  DogImageDetail, 
  ImageDetail, 
  LitterImageDetail, 
  PuppyImageDetail } from '../../../../hooks/useImageDetail';
import useImage from '../../../../hooks/useImage';
import { orderBy } from 'lodash';
import ShowcaseCarousel from '../../../carousels/showcaseCarousel/showcaseCarousel';
import ModalDogImageDetail from './modalDogImageDetail';
import ModalPuppyImageDetail from './modalPuppyImageDetail';
import ModalLitterImageDetail from './modalLitterImageDetail';
import ContentBlock from '../../../contentBlock/contentBlock';

interface ModalImageDetailProps {
  imageDetail: ImageDetail,
  imagePriority: string[],
}

const ModalImageDetail:FC<ModalImageDetailProps> = ({
  imageDetail,
  imagePriority,
}) => {
  const [ imageNames, setImageNames ] = useState<string[]>([]);
  const { getImageDataByDetailId, getImageDataByName } = useImage();

  useEffect(() => {
    const images = getImageDataByDetailId(imageDetail?.detailId || '');
    const imageNames = orderBy(images.map((image) => image.name), (imageName) => {
      const index = imagePriority?.indexOf(imageName);
      return index !== -1 ? index : Infinity;
    }, ['asc']);
    setImageNames(imageNames);
  }, [ imageDetail, imagePriority, getImageDataByDetailId, getImageDataByName ]);
  
  return (
    <ContentBlock className='model-image-detail'>
      <div className="image-wrapper">
        <ShowcaseCarousel imageNames={imageNames}></ShowcaseCarousel>
      </div>
      {imageDetail?.type === DetailRecordType.Dog &&
        <ModalDogImageDetail dogImageDetail={imageDetail as DogImageDetail}></ModalDogImageDetail>
      }
      {imageDetail?.type === DetailRecordType.Puppy &&
        <ModalPuppyImageDetail puppyImageDetail={imageDetail as PuppyImageDetail}></ModalPuppyImageDetail>
      }
      {imageDetail?.type === DetailRecordType.Litter &&
        <ModalLitterImageDetail litterImageDetail={imageDetail as LitterImageDetail}></ModalLitterImageDetail>
      }
    </ContentBlock>
  )
}

export default ModalImageDetail;