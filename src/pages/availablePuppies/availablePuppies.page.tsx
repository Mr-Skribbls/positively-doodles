import { FC, useEffect, useState } from 'react';
import { LitterInfo, LitterState, litters } from '../../dogInfo';
import constants from '../../constants';
import LitterCard from '../../components/litter/litterCard/litterCard.component';
import PageTitle from '../../components/pageTitle/pageTitle.component';
import './availablePuppies.css';
import ContentBlock from '../../components/contentBlock/contentBlock';
import ProgramDescription from '../../components/contentComponents/static/programDescription';
import ContactForm from '../../components/contactForm/contactForm';

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
      <ContentBlock as='p' className='gallery-instructions' borderSize={1} borderRadius={5}>
        Click or tap on an image for more details
      </ContentBlock>
      {availableLitters.length > 0 && <section>
        <div className='section-header'>
          <h2>Available Puppies</h2>
        </div>
        {availableLitters.map((litter, key) => <LitterCard key={key} litter={litter} />)}
      </section>}
      {upcomingLitters.length > 0 && <section className='expected-litters'>
        <div className='section-header'>
          <h2>Expected Litters</h2>
        </div>
        {upcomingLitters.map((litter, key) => <LitterCard key={key} litter={litter} />)}
      </section>}
      <ContentBlock as='section' className='contact-details'>
        <ContentBlock className='litter-details' borderSize={1}>
          <ProgramDescription />
          <p>
            If you're interested in adopting one of these cute pups contact us using the contact form on this page, call us at <a href={`tel:${constants.phoneNumber}`}>{constants.phoneNumberDisplay}</a>, email us at <a href={`mailto:${constants.emailAddress}`}>{constants.emailAddress}</a>, or message us on <a target='_blank' href={constants.facebookAddress}>facebook</a>.
          </p>
        </ContentBlock>
        <ContentBlock className='contact-form' borderSize={1}>
          <ContactForm />
        </ContentBlock>
      </ContentBlock>
    </div>
  );
};

export default AvailablePuppies;