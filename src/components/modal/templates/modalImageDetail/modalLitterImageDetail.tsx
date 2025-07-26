import { FC, useEffect, useState } from 'react';
import { LitterImageDetail } from '../../../../hooks/useImageDetail';
import useLitter from '../../../../hooks/useLitter';
import { compact, isEmpty } from 'lodash';
import ProgramDescription from '../../../contentComponents/static/programDescription';
import { Link } from 'react-router-dom';
import SimpleCarousel from '../../../carousels/simpleCarousel/simpleCarousel';


interface ModalLitterImageDetailProps {
  litterImageDetail: LitterImageDetail,
}

const ModalLitterImageDetail:FC<ModalLitterImageDetailProps> = ({
  litterImageDetail,
}) => {
  const [ title, setTitle ] = useState<string>('');
  const [ puppyImageNames, setPuppyImageNames ] = useState<string[]>([]);
  const { litterDescription } = useLitter();

  useEffect(() => {
    const dam = litterImageDetail.record?.dam.name;
    const sire = litterImageDetail.record?.sire.name;
    const title = compact([dam, sire]).join(' and ') + ' Litter';
    setTitle(title);

    const puppyImageNames = (litterImageDetail.record?.puppies || []).map((puppy) => puppy.imageName);
    setPuppyImageNames(puppyImageNames);
  }, [litterImageDetail]);

  return (
    <article className='info'>
      <h1>{title}</h1>
      {litterImageDetail.record && <p>{
        litterDescription(litterImageDetail.record)  
      }</p>}
      <section>
        <h3>About our program</h3>
        <ProgramDescription />
        <Link to='../available-puppies'>See available puppies</Link>
      </section>
      {!isEmpty(puppyImageNames) && <section>
        <h3>Puppies in this litter</h3>
        <div className="carousel-container">
          <SimpleCarousel imageNames={puppyImageNames}></SimpleCarousel>
        </div>
      </section>}
    </article>
  )
};

export default ModalLitterImageDetail;