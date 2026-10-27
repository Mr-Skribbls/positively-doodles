import './showcaseCarousel.css';
import { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import PrevButton from '../prevButton';
import NextButton from '../nextButton';
import { usePrevNextButtons } from '../../../hooks/usePrevNextButtons';
import { SelectedSnapDisplay } from '../emblaCarouselSelectedSnapDisplay';
import { useSelectedSnapDisplay } from '../../../hooks/useSelectedSnapDisplay';
import { AnimalImage, BreederCentralImage, ImageCenter, OffspringImage } from '@breeder-central/ui';

interface ShowcaseCarouselProps {
  images: (AnimalImage | OffspringImage)[],
}

const ShowcaseCarousel:FC<ShowcaseCarouselProps> = ({
  images,
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
          {images.map((image, key) => (
            <div key={key} className="embla__slide">
              <BreederCentralImage
                imageUrl={image.signedUrl}
                alt={image.alt}
                center={[image.centerX, image.centerY] as ImageCenter}
              />
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