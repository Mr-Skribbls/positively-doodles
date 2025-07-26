import { FC } from 'react';
import { LitterInfo } from '../../../../dogInfo';
import './expectedLitterPanel.css';
import ContentBlock from '../../../contentBlock/contentBlock';
import DogShowcaseCard from '../../../dogShowcaseCard/dogShowcaseCard';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

interface ExpectedLitterPanelProps {
  litter: LitterInfo,
}

const ExpectedLitterPanel:FC<ExpectedLitterPanelProps> = ({
  litter,
}) => {
  const windowDimensions = useWindowDimensions();

  const maxWidth = () => windowDimensions.width > 1350 ? '50%' : '100%';
  const flexDirection = () => windowDimensions.width > 1350 ? 'row' : 'column';
  const maxParentDescriptionWidth = '350px';

  return (
    <>
      <ContentBlock as='figure' className='expected-litter-panel' style={{
        padding: '15px',
        gap: '15px',
      }}>
        <h2>{litter.puppyBreed.class} {litter.puppyBreed.expectedSizes.join(' to ')} {litter.puppyBreed.type} Litter</h2>

        <p>{litter.preBirthDescription}</p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          <h4>Parents</h4>
          <div style={{
            display: 'flex',
            flexDirection: flexDirection(),
            gap: '15px',
          }}>
            <DogShowcaseCard dog={litter.dam} style={{
              maxWidth: maxWidth(),
            }}>
              <h4>{litter.dam.name}</h4>
              <p>
                {litter.dam.description}
              </p>
            </DogShowcaseCard>

            <DogShowcaseCard dog={litter.sire} style={{
              maxWidth: maxWidth(),
            }}>
              <h4>{litter.sire.name}</h4>
              <p style={{
                maxWidth: maxParentDescriptionWidth,
              }}>
                {litter.sire.description}
              </p>
            </DogShowcaseCard>
          </div>
        </div>



        {/* <ContentBlock borderSize={1}>
          <div className="image-container">
            <SourceSetImage imageName={litter.dam.images.main} sizesRules={['200px']} />
          </div>
            <SourceSetImage imageName={litter.sire.images.main} sizesRules={['200px']} />
        </ContentBlock> */}






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