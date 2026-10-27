import { FC, useMemo } from 'react';
import ProgramDescription from '../../../contentComponents/static/programDescription';
import { Link } from 'react-router-dom';
import SimpleCarousel from '../../../carousels/simpleCarousel/simpleCarousel';
import { BreederCentralOffspringGroup } from '@breeder-central/ui';
import useAnimalDetails from '../../../../contexts/animalDetails/animalDetails.context';
import useLitter from '../../../../hooks/useLitter';


interface ModalLitterImageDetailProps {
  litter: BreederCentralOffspringGroup;
}

const ModalLitterImageDetail:FC<ModalLitterImageDetailProps> = ({
  litter,
}) => {
  const { animalImages } = useAnimalDetails();
  const {
    litterDescription2: litterDescription,
    litterPuppies,
    litterParentText: litterParents,
  } = useLitter(litter);

  const litterPuppyImages = useMemo(() => {
    const litterPuppyIds = litterPuppies.map((puppy) => puppy.id);
    return animalImages.filter((image) => litterPuppyIds.includes(image.animalId));
  }, [animalImages, litterPuppies]);

  return (
    <article className='info'>
      <h1>{(litterParents + ' Litter').trim()}</h1>

      { litterDescription }

      { litter && <section>
        <h3>About our program</h3>
        <ProgramDescription />
        <Link to='../available-puppies'>See available puppies</Link>
      </section> }

      { litterPuppyImages.length > 0 && <section>
        <h3>Puppies in this litter</h3>
        <div className='carousel-container'>
          <SimpleCarousel images={litterPuppyImages} />
        </div>
      </section> }
    </article>
  );
};

export default ModalLitterImageDetail;