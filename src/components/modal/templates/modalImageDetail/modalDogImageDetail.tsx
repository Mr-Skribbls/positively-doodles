import { FC, useEffect, useState } from 'react';
import { DogImageDetail } from '../../../../hooks/useImageDetail';
import useImage from '../../../../hooks/useImage';
import { isEmpty, isNil } from 'lodash';
import SimpleCarousel from '../../../carousels/simpleCarousel/simpleCarousel';
import { Puppy } from '../../../../dogInfo';

interface ModalDogImageDetailProps {
  dogImageDetail: DogImageDetail,
}

const ModalDogImageDetail:FC<ModalDogImageDetailProps> = ({
  dogImageDetail,
}) => {
  const [ puppyImageNames, setPuppyImageNames ] = useState<string[]>([]);
  const { getImageDataByDetailId, getImageDataByName } = useImage();

  useEffect(() => {
    let puppies: Puppy[] = [];
    puppies = dogImageDetail.litters.reduce((puppies, litter) => {
      if(isNil(litter.puppies)) return puppies
      puppies = [...puppies, ...litter.puppies];
      return puppies;
    }, puppies);

    const puppyImageNames = puppies.map((puppy) => puppy.imageName);
    setPuppyImageNames(puppyImageNames)
  }, [ dogImageDetail, getImageDataByDetailId, getImageDataByName ]);
  
  const getOFALink = (ofaId: number): string => `https://ofa.org/advanced-search/?appnum=${ofaId}`

  const getGeneticTestingMessage = (dogImageDetail: DogImageDetail | undefined): JSX.Element | undefined => {
    const results = dogImageDetail?.record?.testing?.genetics?.results;
    if(!isNil(results)) {
      return (
        <p>
          {results} If you would like to see her results please contact me.
        </p>
      )
    }
  }

  const getOFATestingMessage = (dogImageDetail: DogImageDetail | undefined): JSX.Element | undefined => {
    const ofaId = dogImageDetail?.record?.testing?.OFA?.ofaId;
    const prelimId = dogImageDetail?.record?.testing?.OFA?.ofaPreliminaryId;

    const getLink = (ofaId: number | undefined) => !isNil(ofaId) ? <a target='_blank' href={getOFALink(ofaId)}>here</a> : undefined;

    if (!isNil(ofaId) || !isNil(prelimId)) {
      const ofaLink = getLink(ofaId);
      const prelimLink = getLink(prelimId);
      
      const ofaMessage = !isNil(ofaLink) ? <span>If you would like to see OFA testing results click {ofaLink}. </span> : undefined;
      const prelimMessage = !isNil(prelimLink) ? <span>Click {prelimLink} to see preliminaries. </span> : undefined;

      return (
        <p>
          {ofaMessage}
          {prelimMessage}
        </p>
      )
    }
  }

  return (
    <div className='info'>
      <h1>{dogImageDetail?.record?.name}</h1>
      <p>{dogImageDetail?.record?.description}</p>
      { getGeneticTestingMessage(dogImageDetail) }
      { getOFATestingMessage(dogImageDetail) }
      {!isEmpty(puppyImageNames) && <>
        <h3>Past Puppies</h3>
        <div className='carousel-container'>
          <SimpleCarousel imageNames={puppyImageNames}></SimpleCarousel>
        </div>
      </>}
    </div>
  )
}

export default ModalDogImageDetail;