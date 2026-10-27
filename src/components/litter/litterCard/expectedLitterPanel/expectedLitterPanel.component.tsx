import { FC } from 'react';
import './expectedLitterPanel.css';
import ContentBlock from '../../../contentBlock/contentBlock';
import DogShowcaseCard from '../../../dogShowcaseCard/dogShowcaseCard';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { BreederCentralOffspringGroup } from '@breeder-central/ui';
import useLitter from '../../../../hooks/useLitter';

interface ExpectedLitterPanelProps {
  litter: BreederCentralOffspringGroup,
}

const ExpectedLitterPanel:FC<ExpectedLitterPanelProps> = ({
  litter,
}) => {
  const windowDimensions = useWindowDimensions();
  const {
    litterParentText,
    litterDescription2: litterDescription,
    litterParents,
  } = useLitter(litter);

  const maxWidth = () => windowDimensions.width > 1350 ? '50%' : '100%';
  const flexDirection = () => windowDimensions.width > 1350 ? 'row' : 'column';
  const maxParentDescriptionWidth = '350px';

  return (
    <>
      <ContentBlock as='figure' className='expected-litter-panel' style={{
        padding: '15px',
        gap: '15px',
      }}>
        <h2>{ litterParentText } Litter</h2>

        <p>{ litterDescription }</p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          { (litterParents.dam || litterParents.sire) && <>
            <h4>Parents</h4>
            <div style={{
              display: 'flex',
              flexDirection: flexDirection(),
              gap: '15px',
            }}>
              { litterParents.dam && <DogShowcaseCard
                  dog={litterParents.dam}
                  style={{
                    maxWidth: maxWidth(),
                  }}
                >
                  <h4>{litterParents.dam.name}</h4>
                  <p>
                    {litterParents.dam.description}
                  </p>
                </DogShowcaseCard>
              }

              { litterParents.sire && <DogShowcaseCard
                  dog={litterParents.sire}
                  style={{
                    maxWidth: maxWidth(),
                  }}
                >
                  <h4>{litterParents.sire.name}</h4>
                  <p style={{
                    maxWidth: maxParentDescriptionWidth,
                  }}>
                    {litterParents.sire.description}
                  </p>
                </DogShowcaseCard>
              }
            </div>
          </> }
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