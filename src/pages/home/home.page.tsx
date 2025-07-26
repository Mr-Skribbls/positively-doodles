import { FC, useEffect } from 'react';
import './home.css';
import isNil from 'lodash/isNil';
import ContentBarTitleLeft from '../../components/contentComponents/contentBarTitleLeft/contentBarTitleLeft.component';
import { Section } from '../../services/content.service';
import useContent from '../../hooks/useContent';
import SourceSetImage from '../../components/sourceSetImage/sourceSetImage.component';
import Carousel from '../../components/carousels/carousel/carousel.component';
import Testimonial from '../../components/testimonial/testimonial';
import MyMap from '../../components/myMap/myMap';
import { Link } from 'react-router-dom';
import { Marker } from 'react-leaflet';
import useLeafletMarkers from '../../hooks/useLeafletMarkers';
import ContentBlock from '../../components/contentBlock/contentBlock';

interface HomeProps {

}

const Home:FC<HomeProps> = () => {
  const {findSection, findArticle} = useContent();
  const { getMarkersByType } = useLeafletMarkers();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const ourGoalSection:Section | undefined = findSection(findArticle('about positively doodles'), 'Our Goal');

  const whyChooseUsSection: Section | undefined = findSection(findArticle('about positively doodles'), 'Why Choose Positively Doodles?');

  return (
    <div className="home-page site-container">
      <Carousel imageClasses={['puppy']} />

      <article className="content">
        {!isNil(ourGoalSection) && <ContentBarTitleLeft title={ourGoalSection.sectionTitle} paragraphs={ourGoalSection.paragraphs} imageOverride={{
          imageName: 'Liberty_KingKong_Buddy_6weeks_2',
          imageType: 'png',
          imageWidth: 300,
        }} />}

        {!isNil(whyChooseUsSection) && <ContentBarTitleLeft title={whyChooseUsSection.sectionTitle} paragraphs={whyChooseUsSection.paragraphs} imageOverride={{
          imageName: 'Liberty_KingKong_TinyTim_6weeks',
          imageType: 'png',
          imageWidth: 450,
        }} />}

        <ContentBlock className='testimonial-block' as='section'>
          <h1>Testimonials</h1>
          <Testimonial customerName='Scott Family' />
          <Testimonial customerName='Baril Family' />
          <Testimonial customerName='Hosier Family' />
          <Testimonial customerName='Traughber Family' />
        </ContentBlock>
      </article>

      <section className="badges">
        <div className="badge">
          <Link to="baxter-and-bella">
            <SourceSetImage imageName='Baxter_and_Bella_Partners_Badge' sizesRules={['(max-width: 550px) 90%', '250px']} />
          </Link>
        </div>
        <div className="badge">
          <a target='_blank' href="https://www.gooddog.com/breeders/positively-doodles-illinois">
            <SourceSetImage imageName='goodDogBadge' sizesRules={['(max-width: 550px) 90%', '250px']} />
          </a>
        </div>
        <div className="badge">
          <SourceSetImage imageName='Esa_Jensen_ABCDT' sizesRules={['(max-width: 550px) 90%', '250px']} />
        </div>
      </section>

      <section className='map'>
        <MyMap>
          {getMarkersByType('customer').map((marker, key) => <Marker key={key} position={marker.position} />)}
        </MyMap>
      </section>

    </div>
  );
};

export default Home;