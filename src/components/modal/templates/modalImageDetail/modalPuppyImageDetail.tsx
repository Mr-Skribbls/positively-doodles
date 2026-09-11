import { FC } from 'react';
import ProgramDescription from '../../../contentComponents/static/programDescription';
import { Link } from 'react-router-dom';
import { BreederCentralAnimal } from '@breeder-central/ui';

interface ModalPuppyImageDetailProps {
  puppy: BreederCentralAnimal;
  // litter: Offspring;
}

const ModalPuppyImageDetail:FC<ModalPuppyImageDetailProps> = ({
  puppy,
}) => {

  return (
    <article className='info'>
      <h1>{puppy.name}</h1>
      <p>{puppy.description}</p>
      {puppy.state === 'Puppy' && <p>
        {puppy.name} is waiting to find {puppy.gender === 'M' ? 'his' : 'her'} forever home. 
      </p>}
      {puppy.state !== 'Puppy' && <p>
        {puppy.name} has found {puppy.gender === 'M' ? 'his' : 'her'} forever home.
      </p>}
      {/* {puppyImageDetail.litter && <section>
        <h3>About the litter</h3>
        {litterDescription(puppyImageDetail.litter)}
      </section>} */}
      <section>
        <h3>About our program</h3>
        <ProgramDescription />
        <Link to='../available-puppies'>See available puppies</Link>
      </section>
    </article>
  )
};

export default ModalPuppyImageDetail;