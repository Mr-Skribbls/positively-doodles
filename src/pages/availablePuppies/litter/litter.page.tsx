import { FC, useEffect, useState } from 'react';
import { LitterInfo, litters } from '../../../dogInfo';
import isNil from 'lodash/isNil';
import './Litter.css';
import useDateHelper from '../../../hooks/useDateHelper';
import Parent from '../../../components/litter/parent/parent.component';
import { useParams } from 'react-router-dom';

interface LitterProps {
  
}

const Litter:FC<LitterProps> = () => {
  const {hyphenatedDate} = useDateHelper();
  const [litter, setLitter] = useState<LitterInfo|null>();
  const { id } = useParams();

  useEffect(() => {
    const [dam, sire, date] = (id || '').split('_');
    const litter = litters.find((l) => {
      return l.dam?.name === dam && 
             l.sire?.name === sire && 
             hyphenatedDate(l.dueDate) === date;
    });
    setLitter(litter);
  }, [id, hyphenatedDate]);

  return (
    <div className="litter-container">
      <h2>Parents</h2>
      {!isNil(litter) && <div className="parent-container">
        <Parent dog={litter.dam} />
        <Parent dog={litter.sire} />
      </div>}

      <h2>Puppies</h2>
      <div className="puppy-container">
        {!isNil(litter) && <ul>
          <li><span>Generation:</span> <div></div>{litter.puppyBreed.class}</li>
          <li><span>Coat Types:</span> {litter.expectedCoatTypes.join(', ')}</li>
          <li><span>Colors:</span> {litter.expectedColors.join(', ')}</li>
          <li><span>Expected Size:</span> {litter.puppyBreed.expectedSizes.join(' to ')}</li>
          <li><span>Expected Due Date:</span> {litter.dueDate.toDateString()}</li>
          <li><span>Go Home Date:</span> Puppies will be ready to go to their forever home 8 weeks after they are born.</li>
          <li><span>Starting Price:</span> ${litter.startingPrice}</li>
          <li><span>Reservation Fee:</span> ${litter.reservationFee}</li>
        </ul>}
      </div>
    </div>
  );
};

export default Litter;