import { FC } from 'react';
import { LitterInfo } from '../../../../dogInfo';
import ReactFocusPointImage from 'react-focus-point-image/dist/ReactFocusPointImage';
import isNil from 'lodash/isNil';
import { Link } from 'react-router-dom';
import useDateHelper from '../../../../hooks/useDateHelper';
import './expectedLitterCard.css';

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
            {!isNil(litter.dam) && <ReactFocusPointImage
              src={litter.dam.images.main.path}
              alt={litter.dam.images.main.alt}
              focusPoint={[
                litter.dam.images.main.centerOfFocus.x,
                litter.dam.images.main.centerOfFocus.y,
              ]}
              animate />}
          </div>
          <div className="sire-image">
            {!isNil(litter.sire) && <ReactFocusPointImage
              src={litter.sire.images.main.path}
              alt={litter.sire.images.main.alt}
              focusPoint={[
                litter.sire.images.main.centerOfFocus.x,
                litter.sire.images.main.centerOfFocus.y,
              ]}
              animate />}
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