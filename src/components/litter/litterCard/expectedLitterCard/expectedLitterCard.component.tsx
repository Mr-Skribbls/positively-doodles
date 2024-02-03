import { FC } from 'react';
import { LitterInfo } from '../../../../dogInfo';
import isNil from 'lodash/isNil';
import { Link } from 'react-router-dom';
import useDateHelper from '../../../../hooks/useDateHelper';
import './expectedLitterCard.css';
import SourceSetImage from '../../../sourceSetImage/sourceSetImage.component';

interface ExpectedLitterCardProps {
  litter: LitterInfo,
}

const ExpectedLitterCard:FC<ExpectedLitterCardProps> = ({
  litter,
}) => {
  const dateHelper = useDateHelper();
  return (
    <figure className='expected-litter-card'>
      <div className="card-container">
        <div className='parent-images'>
          <div className='dam-image'>
            {!isNil(litter.dam) && <SourceSetImage imageName={litter.dam.images.main} sizesRules={['200px']} />}
          </div>
          <div className="sire-image">
            {!isNil(litter.sire) && <SourceSetImage imageName={litter.sire.images.main} sizesRules={['200px']} />}
          </div>
        </div>
        <figcaption>
          <h4>{litter.dam.name} and {litter.sire.name} litter</h4>
          <div>
            <ul>
              <li>
                <span className='label'>Expected: </span>
                <span>{litter.dueDate.toDateString()}</span>
              </li>
              <li>
                <span className="label">Expecting: </span>
                <span>{litter.size}</span>
              </li>
              <li><Link to={`/litter/${litter.dam.name}_${litter.sire.name}_${dateHelper.hyphenatedDate(litter.dueDate)}`}>Find out more</Link></li>
            </ul>
          </div>
        </figcaption>
      </div>
      
    </figure>
  )
};

export default ExpectedLitterCard;