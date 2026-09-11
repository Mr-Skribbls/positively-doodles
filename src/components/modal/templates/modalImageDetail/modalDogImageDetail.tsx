import { useMemo } from 'react';
import { BreederCentralAnimal } from '@breeder-central/ui';
import SimpleCarousel from '../../../carousels/simpleCarousel/simpleCarousel';
import useAnimalDetails from '../../../../hooks/useAnimalDetails';
import useLitter from '../../../../hooks/useLitter';
import ProgramDescription from '../../../contentComponents/static/programDescription';
import { Link } from 'react-router-dom';

interface ModalDogImageDetailProps {
  dog: BreederCentralAnimal;
}

const ModalDogImageDetail = ({
  dog,
}: ModalDogImageDetailProps) => {
  const { animalImages, offspringGroups } = useAnimalDetails();
  
  // The litter the dog is in (dog is child).
  const dogLitter = useMemo(() => {
    return offspringGroups.find((group) => group.animals.filter((animal) => animal.role === 'Child').map((animal) => animal.animalId).includes(dog.id)) ?? null;
  }, [dog, offspringGroups]);
  const { litterDescription2: litterDescription } = useLitter(dogLitter);

  const dogLitterImages = useMemo(() => {
    const litterMateIds = dogLitter?.animals
      .filter((animal) => 
           animal.role === 'Child' 
        && animal.animalId !== dog.id)
      .map((animal) => animal.animalId)
      ?? [];
    return animalImages.filter((image) => litterMateIds.includes(image.animalId));
  }, [animalImages, dog.id, dogLitter?.animals]);

  // The litters the dog has had. (dog is parent)
  const litters = useMemo(() => {
    return offspringGroups.filter((group) => group.animals.filter((animal) => ['Mother', 'Father'].includes(animal.role)).map((animal) => animal.animalId).includes(dog.id)) ?? null;
  }, [dog, offspringGroups]);

  const puppyImages = useMemo(() => {
    const puppyIds = litters.reduce((puppyIds, litter) => {
      const puppies = litter.animals.filter((animal) => animal.role === 'Child');
      puppyIds = [
        ...puppyIds,
        ...puppies.map((puppy) => puppy.animalId),
      ];
      return puppyIds;
    }, [] as number[]);

    return animalImages.filter((image) => puppyIds.includes(image.animalId));
  }, [animalImages, litters]);

  return (
    <article className='info'>
      <h1>{ dog.name }</h1>
      <p>{ dog.description }</p>

      { dog.state === 'Puppy' && <section>
        <h3>About the litter</h3>
        { litterDescription }
      </section> }

      { dogLitterImages.length > 0 && <>
        <h3>Litter Mates</h3>
        <div className="carousel-container">
          <SimpleCarousel images={dogLitterImages} />
        </div>
      </> }

      { puppyImages.length > 0 && <>
        <h3>Puppies</h3>
        <div className="carousel-container">
          <SimpleCarousel images={puppyImages} />
        </div>
      </> }

      <section>
        <h3>About our program</h3>
        <ProgramDescription />
        <Link to='../available-puppies'>See available puppies</Link>
      </section>

    </article>
  );
}

export default ModalDogImageDetail;