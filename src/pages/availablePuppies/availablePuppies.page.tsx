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
  const [upcomingLitters, setUpcomingLitters] = useState<LitterInfo[]>([]);

  useEffect(() => {
    window.scrollTo(0,0);
    setAvailableLitters(litters.filter(isLitterAvailable));
    setUpcomingLitters(litters.filter(isLitterExpected));
  }, []);

  const isLitterAvailable = (litter:LitterInfo) => 
    litter.state === LitterState.Puppy ||
    litter.state === LitterState.HomeBound;
  
  const isLitterExpected = (litter:LitterInfo) => litter.state === LitterState.Expected;

  return (
    <div className='available-puppies site-container'>
      <PageTitle title={`${constants.companyName} Puppies`} />
      <section>
        <div className='section-header'>
          <h2>Available Puppies</h2>
        </div>
        {availableLitters.map((litter, key) => <LitterCard key={key} litter={litter} />)}
      </section>
      {upcomingLitters.length > 0 && <section className='expected-litters'>
        <div className='section-header'>
          <h2>Expected Litters</h2>
        </div>
        {upcomingLitters.map((litter, key) => <LitterCard key={key} litter={litter} />)}
      </section>}
    </div>
  )
};

export default AvailablePuppies;