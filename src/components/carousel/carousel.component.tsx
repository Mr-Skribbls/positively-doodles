import { clone, range, shuffle, some } from 'lodash';
import useImage from '../../hooks/useImage';
import './carousel.css';
import { FC, useEffect, useState } from 'react';
import ImageSwitcher from '../imageSwitcher/imageSwitcher.component';
import useTiltedRandomizer from '../../hooks/useTiltedRandomizer';
import { getRandomInt } from '../../services/random.service';

interface CarouselProps {
  imageClasses: string[]
}

const Carousel:FC<CarouselProps> = ({imageClasses}) => {
  const { getImageDataByClassName } = useImage();
  const [ imageIndices, setImageIndices ] = useState(range(7));
  const [ imageNames ] = useState(shuffle(getImageDataByClassName(imageClasses, some).map((imageData) => imageData.name)));
  const carouselIndex = useTiltedRandomizer(7);

  useEffect(() => {
    const changeImage = (indices: number[], excludedIndices: number[]): number[] => {
      const newIndices = clone(indices);
      newIndices[carouselIndex.next() - 1] = excludedIndices[getRandomInt(0, excludedIndices.length - 1)];
      return newIndices;
    };

    const interval = setInterval(() => {
      const excludedIndices = range(imageNames.length).filter((i) => !imageIndices.includes(i));
      setImageIndices(changeImage(imageIndices, excludedIndices));
    }, 5000);

    return () => clearInterval(interval);
  }, [imageNames, imageIndices, setImageIndices, carouselIndex, getRandomInt]);

  return (
    <div className='carousel'>
      <div className="item wide">
        <ImageSwitcher imageName={imageNames[imageIndices[0]]} sizesRules={['40%']} />
      </div>
      <div className="item">
        <ImageSwitcher imageName={imageNames[imageIndices[1]]} sizesRules={['20%']} />
      </div>
      <div className="item wide-tall">
        <ImageSwitcher imageName={imageNames[imageIndices[2]]} sizesRules={['40%']} />
      </div>
      <div className="item tall">
        <ImageSwitcher imageName={imageNames[imageIndices[3]]} sizesRules={['40%']} />
      </div>
      <div className="item tall">
        <ImageSwitcher imageName={imageNames[imageIndices[4]]} sizesRules={['40%']} />
      </div>
      <div className="item wide">
        <ImageSwitcher imageName={imageNames[imageIndices[5]]} sizesRules={['40%']} />
      </div>
      <div className="item">
        <ImageSwitcher imageName={imageNames[imageIndices[6]]} sizesRules={['20%']} />
      </div>
    </div>
  );
};

export default Carousel;