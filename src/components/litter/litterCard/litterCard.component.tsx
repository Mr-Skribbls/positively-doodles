import { FC } from 'react';
import './litterCard.css';
import { LitterInfo, LitterState } from '../../../dogInfo';
import ExpectedLitterCard from './expectedLitterCard/expectedLitterCard.component';
import PuppiesLitterCard from './puppiesLitterCard/puppiesLitterCard.component';

interface LitterCardProps {
  litter: LitterInfo,
}

const LitterCard:FC<LitterCardProps> = ({
  litter,
}) => {
  return (
    <div className='litter-card'>
      {litter.state === LitterState.Expected && <ExpectedLitterCard litter={litter} />}
      {(litter.state === LitterState.Puppy || litter.state === LitterState.HomeBound) && <PuppiesLitterCard litter={litter} />}
    </div>
  )
};

export default LitterCard;