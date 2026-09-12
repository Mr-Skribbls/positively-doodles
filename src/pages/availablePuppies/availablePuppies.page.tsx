import { FC, useCallback, useEffect, useMemo } from 'react';
import constants from '../../constants';
import LitterCard from '../../components/litter/litterCard/litterCard.component';
import PageTitle from '../../components/pageTitle/pageTitle.component';
import './availablePuppies.css';
import ContentBlock from '../../components/contentBlock/contentBlock';
import ProgramDescription from '../../components/contentComponents/static/programDescription';
import ContactForm from '../../components/contactForm/contactForm';
import { Helmet } from 'react-helmet';
import useAnimalDetails from '../../contexts/animalDetails/animalDetails.context';
import { BreederCentralOffspringEvent, BreederCentralOffspringGroup } from '@breeder-central/ui';

interface AvailablePuppiesProps {

}

const AvailablePuppies:FC<AvailablePuppiesProps> = () => {
  // const [availableLitters, setAvailableLitters] = useState<LitterInfo[]>([]);
  // const [upcomingLitters, setUpcomingLitters] = useState<LitterInfo[]>([]);
  const { offspringGroups } = useAnimalDetails();

  const passedGoHome = (event: BreederCentralOffspringEvent) => event.name === 'go home' && new Date(event.date) <= new Date();

  const futureGoHome = (event: BreederCentralOffspringEvent) => event.name === 'go home' && new Date(event.date) > new Date();

  const getGroupByEvent = useCallback((eventCondition: (event: BreederCentralOffspringEvent) => boolean) => (group: BreederCentralOffspringGroup) => {
    return group.events.some(eventCondition);
  }, []);

  const availableLitters = useMemo(() => {
    return offspringGroups.filter(getGroupByEvent(passedGoHome));
  }, [getGroupByEvent, offspringGroups]);

  const upcomingLitters = useMemo(() => {
    return offspringGroups.filter(getGroupByEvent(futureGoHome));
  }, [getGroupByEvent, offspringGroups]);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className='available-puppies site-container'>
      <Helmet>
        <title>{constants.companyName} Puppies</title>
        <meta name="keywords" content="doodle puppies for sale, available doodle puppies, doodle puppies near me, doodle puppies ready now, doodle puppies available today, bernedoodle puppies for sale, cute doodle puppies for sale, family-raised doodle puppies"></meta>
        <meta name='description' content='Meet the little ones ready to be part of your family' />
      </Helmet>
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
        <div className='expected-list'>
          {upcomingLitters.map((litter, key) => <LitterCard key={key} litter={litter} />)}
        </div>
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