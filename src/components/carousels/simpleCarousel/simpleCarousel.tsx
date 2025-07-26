import { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './simpleCarousel.css';
import SourceSetImage from '../../sourceSetImage/sourceSetImage.component';
import PrevButton from '../prevButton';
import NextButton from '../nextButton';
import { usePrevNextButtons } from '../../../hooks/usePrevNextButtons';
import { SelectedSnapDisplay } from '../emblaCarouselSelectedSnapDisplay';
import { useSelectedSnapDisplay } from '../../../hooks/useSelectedSnapDisplay';
import ContentBlock from '../../contentBlock/contentBlock';

interface SimpleCarouselProps {
  imageNames: string[],
}

const SimpleCarousel:FC<SimpleCarouselProps> = ({
  imageNames,
}) => {
  const [ emblaRef, emblaApi ] = useEmblaCarousel({ 
    loop: false,
    align: 'center',
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <div className='simple-carousel'>
      <section className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {imageNames.map((imageName, key) => (
            <ContentBlock key={key} className="embla__slide" borderSize={1}>
              <SourceSetImage imageName={imageName} sizesRules={['250px']}></SourceSetImage>
            </ContentBlock>
          ))}
        </div>
      </section>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
      
    </div>
  );
};

export default SimpleCarousel;