import { FC } from 'react';
import { PuppyImageDetail } from '../../../../hooks/useImageDetail';
import useLitter from '../../../../hooks/useLitter';
import { PuppyStatus } from '../../../../dogInfo';
import ProgramDescription from '../../../contentComponents/static/programDescription';
import { Link } from 'react-router-dom';

interface ModalPuppyImageDetailProps {
  puppyImageDetail: PuppyImageDetail,
}

const ModalPuppyImageDetail:FC<ModalPuppyImageDetailProps> = ({
  puppyImageDetail,
}) => {
  const { litterDescription } = useLitter();

  return (
    <article className='info'>
      <h1>{puppyImageDetail.record?.name}</h1>
      <p>{puppyImageDetail.record?.description}</p>
      {puppyImageDetail.record?.status === PuppyStatus.Available && <p>
        {puppyImageDetail.record.name} is waiting to find {puppyImageDetail.record.gender === 'M' ? 'his' : 'her'} forever home. 
      </p>}
      {puppyImageDetail.record?.status !== PuppyStatus.Available && <p>
        {puppyImageDetail.record?.name} has found {puppyImageDetail.record?.gender === 'M' ? 'his' : 'her'} forever home.
      </p>}
      {puppyImageDetail.litter && <section>
        <h3>About the litter</h3>
        {litterDescription(puppyImageDetail.litter)}
      </section>}
      <section>
        <h3>About our program</h3>
        <ProgramDescription />
        <Link to='../available-puppies'>See available puppies</Link>
      </section>
    </article>
  )
};

export default ModalPuppyImageDetail;