import { FC } from 'react';
import { LitterInfo, LitterState } from '../../../dogInfo';
import ExpectedLitterPanel from './expectedLitterPanel/expectedLitterPanel.component';
import PuppiesLitterPanel from './puppiesLitterPanel/puppiesLitterPanel.component';

interface LitterCardProps {
  litter: LitterInfo,
}

const LitterCard:FC<LitterCardProps> = ({
  litter,
}) => {
  return (
    <div className='litter-card'>
      {litter.state === LitterState.Expected && <ExpectedLitterPanel litter={litter} />}
      {(litter.state === LitterState.Puppy || litter.state === LitterState.HomeBound) && <PuppiesLitterPanel litter={litter} />}
    </div>
  );
};

export default LitterCard;