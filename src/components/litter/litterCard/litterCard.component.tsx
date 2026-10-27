import { FC, useMemo } from 'react';
import ExpectedLitterPanel from './expectedLitterPanel/expectedLitterPanel.component';
import PuppiesLitterPanel from './puppiesLitterPanel/puppiesLitterPanel.component';
import { BreederCentralOffspringGroup } from '@breeder-central/ui';

interface LitterCardProps {
  litter: BreederCentralOffspringGroup,
}

const LitterCard:FC<LitterCardProps> = ({
  litter,
}) => {
  const isComplete = useMemo(() => {
    return (litter.events ?? []).some((event) => event.name?.toLowerCase() === 'complete');
  }, [litter.events]);

  const litterState = useMemo(() => {
    const birthEvent = litter.events.find((event) => event.name === 'birth');
    if(!birthEvent) return 'Expected';
    const birthDate = new Date(birthEvent.date);
    return birthDate > new Date() ? 'Expected' : 'Puppy';
  }, [litter.events]);

  if (isComplete) return null;

  return (
    <div className='litter-card'>
      { litterState === 'Expected' && <ExpectedLitterPanel litter={litter} />}
      { litterState === 'Puppy' && <PuppiesLitterPanel litter={litter} />}
    </div>
  );
};

export default LitterCard;