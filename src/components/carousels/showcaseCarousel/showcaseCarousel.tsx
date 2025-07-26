import './showcaseCarousel.css';
import { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SourceSetImage from '../../sourceSetImage/sourceSetImage.component';
import PrevButton from '../prevButton';
import NextButton from '../nextButton';
import { usePrevNextButtons } from '../../../hooks/usePrevNextButtons';
import { SelectedSnapDisplay } from '../emblaCarouselSelectedSnapDisplay';
import { useSelectedSnapDisplay } from '../../../hooks/useSelectedSnapDisplay';

interface ShowcaseCarouselProps {
  imageNames: string[],
}

const ShowcaseCarousel:FC<ShowcaseCarouselProps> = ({
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
    <div className='showcase-carousel'>
      <section className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {imageNames.map((imageName, key) => (
            <div key={key} className="embla__slide">
              <SourceSetImage imageName={imageName}></SourceSetImage>
            </div>
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

export default ShowcaseCarousel;