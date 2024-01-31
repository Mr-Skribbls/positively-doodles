import { FC, useEffect, useState } from 'react';
import { LitterInfo, LitterState, litters } from '../../dogInfo';
import constants from '../../constants';
import LitterCard from '../../components/litter/litterCard/litterCard.component';
import PageTitle from '../../components/pageTitle/pageTitle.component';
import './availablePuppies.css';

interface AvailablePuppiesProps {

}

const AvailablePuppies:FC<AvailablePuppiesProps> = () => {
  const [availableLitters, setAvailableLitters] = useState<LitterInfo[]>([]);

  useEffect(() => {
    setAvailableLitters(litters.filter(isLitterAvailable));
  }, []);

  const isLitterAvailable = (litter:LitterInfo) => 
    litter.state === LitterState.Expected ||
    litter.state === LitterState.Puppy ||
    litter.state === LitterState.HomeBound;

  return (
    <div className='available-puppies site-container'>
      <PageTitle title={`${constants.companyName} Puppies`} />
      {availableLitters.map((litter, key) => <LitterCard key={key} litter={litter} />)}
    </div>
  )
};

export default AvailablePuppies;