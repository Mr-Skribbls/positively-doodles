import { FC } from 'react';
import { LitterInfo } from '../../../../dogInfo';
import isNil from 'lodash/isNil';
import { Link } from 'react-router-dom';
import './expectedLitterPanel.css';
import SourceSetImage from '../../../sourceSetImage/sourceSetImage.component';
import useLitter from '../../../../hooks/useLitter';
import ContentBlock from '../../../contentBlock/contentBlock';

interface ExpectedLitterPanelProps {
  litter: LitterInfo,
}

const ExpectedLitterPanel:FC<ExpectedLitterPanelProps> = ({
  litter,
}) => {
  return (
    <>
      <ContentBlock as='figure' className='expected-litter-panel'>
        <h2>{litter.puppyBreed.class} {litter.puppyBreed.expectedSizes.join(' to ')} {litter.puppyBreed.type} Litter</h2>
        {/* <div className="panel-container">
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
            <h5>{litter.puppyBreed.type} Puppies</h5>
            <div>
              <ul>
                <li>
                  <span className='label'>Expected: </span>
                  <span>{litter.dueDate.toDateString()}</span>
                </li>
                <li>
                  <span className="label">Expected Adult Size: </span>
                  <span>{litter.expectedPuppySize}</span>
                </li>
                <li><Link to={`/litter/${litterHelper.getLitterId(litter)}`}>Find out more</Link></li>
              </ul>
            </div>
          </figcaption>
        </div> */}
      </ContentBlock>
    </>
  );
};

export default ExpectedLitterPanel;