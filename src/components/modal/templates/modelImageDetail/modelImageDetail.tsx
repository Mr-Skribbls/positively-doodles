import './modalImageDetail.css';
import { FC, useEffect, useState } from 'react';
import { DogImageDetail } from '../../../../hooks/useImageDetail';
import useImage, { ImageData } from '../../../../hooks/useImage';
import SourceSetImage from '../../../sourceSetImage/sourceSetImage.component';
import { isNil } from 'lodash';
import SimpleCarousel from '../../../carousels/simpleCarousel/simpleCarousel';
import { litters, Puppy } from '../../../../dogInfo';

interface ModalImageDetailProps {
  dogImageDetail?: DogImageDetail,
}

const ModalImageDetail:FC<ModalImageDetailProps> = ({
  dogImageDetail
}) => {
  const [ images, setImages ] = useState<ImageData[]>([]);
  const [ puppyImageNames, setPuppyImageNames ] = useState<string[]>([]);
  const { getImageDataByDetailId, getImageDataByName } = useImage();

  useEffect(() => {
    const images = getImageDataByDetailId(dogImageDetail?.detailId || '');
    setImages(images);

    let puppies: Puppy[] = [];
    puppies = litters.filter((litter) => litter.dam.id === dogImageDetail?.record?.id).reduce((puppies, litter) => {
      if(isNil(litter.puppies)) return puppies
      puppies = [...puppies, ...litter.puppies];
      return puppies;
    }, puppies);

    const puppyImageNames = puppies.map((puppy) => puppy.imageName);
    setPuppyImageNames(puppyImageNames)

  }, [getImageDataByDetailId, dogImageDetail, getImageDataByName]);
  
  const getOFALink = (ofaId: number) => `https://ofa.org/advanced-search/?appnum=${ofaId}`

  return (
    <div className='model-image-detail'>
      {images.map((image, key) => (
        <div className='image-wrapper' key={key}>
          <SourceSetImage imageName={image.name} sizesRules={['250px']}></SourceSetImage>
        </div>
      ))}
      <div className='info'>
        <h1>{dogImageDetail?.record?.name}</h1>
        <p>{dogImageDetail?.record?.description}</p>
        {!isNil(dogImageDetail?.record?.testing?.genetics?.results) && <div>
          <p>{dogImageDetail?.record?.testing?.genetics?.results} If you would like to see her Embark results please contact me.</p>
          {!isNil(dogImageDetail?.record?.testing?.OFA?.ofaId) && <p>If you would like to see OFA testing results click <a target="_blank" href={getOFALink(dogImageDetail?.record?.testing?.OFA?.ofaId)}>here</a></p>}
        </div>}
        <h3>Past Puppies</h3>
        {/* todo: one carousel of puppies ( no links just images 250-300px tall full width ) */}
        <div className='carousel-container'>
          <SimpleCarousel imageNames={puppyImageNames}></SimpleCarousel>
        </div>
      </div>
    </div>
  )
}

export default ModalImageDetail;