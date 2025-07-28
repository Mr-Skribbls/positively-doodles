import { clone, range, shuffle, some } from 'lodash';
import useImage from '../../../hooks/useImage';
import './carousel.css';
import { FC, useEffect, useState } from 'react';
import ImageSwitcher from '../../imageSwitcher/imageSwitcher.component';
import useTiltedRandomizer from '../../../hooks/useTiltedRandomizer';
import { getRandomInt } from '../../../services/random.service';

interface CarouselProps {
  imageClasses: string[]
}

const Carousel:FC<CarouselProps> = ({imageClasses}) => {
  const { getImageDataByClassName } = useImage();
  const [ imageIndices, setImageIndices ] = useState(range(7));
  const [ imageNames ] = useState(shuffle(getImageDataByClassName(imageClasses, some).map((imageData) => imageData.name)));
  const carouselIndex = useTiltedRandomizer(7);

  const imageChangeInterval = 5000;

  useEffect(() => {
    const changeImage = (indices: number[], excludedIndices: number[]): number[] => {
      const newIndices = clone(indices);
      newIndices[carouselIndex.next() - 1] = excludedIndices[getRandomInt(0, excludedIndices.length - 1)];
      return newIndices;
    };

    const interval = setInterval(() => {
      const excludedIndices = range(imageNames.length).filter((i) => !imageIndices.includes(i));
      setImageIndices(changeImage(imageIndices, excludedIndices));
    }, imageChangeInterval);

    return () => clearInterval(interval);
  }, [imageNames, imageIndices, setImageIndices, carouselIndex]);

  return (
    <div className='carousel'>
      <div className="item wide">
        <ImageSwitcher imageName={imageNames[imageIndices[0]]} />
      </div>
      <div className="item">
        <ImageSwitcher imageName={imageNames[imageIndices[1]]} />
      </div>
      <div className="item wide-tall">
        <ImageSwitcher imageName={imageNames[imageIndices[2]]} />
      </div>
      <div className="item tall">
        <ImageSwitcher imageName={imageNames[imageIndices[3]]} />
      </div>
      <div className="item tall">
        <ImageSwitcher imageName={imageNames[imageIndices[4]]} />
      </div>
      <div className="item wide">
        <ImageSwitcher imageName={imageNames[imageIndices[5]]} />
      </div>
      <div className="item">
        <ImageSwitcher imageName={imageNames[imageIndices[6]]} />
      </div>
    </div>
  );
};

export default Carousel;