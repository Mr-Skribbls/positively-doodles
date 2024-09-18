import { FC } from 'react';
import './home.css';
import isNil from 'lodash/isNil';
import ContentBarTitleLeft from '../../components/contentComponents/contentBarTitleLeft/contentBarTitleLeft.component';
import content, { ArticleRecord, Section } from '../../services/content.service';
import SourceSetImage from '../../components/sourceSetImage/sourceSetImage.component';
import Carousel from '../../components/carousel/carousel.component';
import Testimonial from '../../components/testimonial/testimonial';
import { Link } from 'react-router-dom';

interface HomeProps {

}

const Home:FC<HomeProps> = () => {

  const findSection = (article:ArticleRecord, sectionTitle: string) => article.sections.find((section) => section.sectionTitle === sectionTitle);

  const ourGoalSection:Section | undefined = findSection(content.articles['about positively doodles'], 'Our Goal');

  const whyChooseUsSection: Section | undefined = findSection(content.articles['about positively doodles'], 'Why Choose Positively Doodles?');

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
      </article>

      <article className='testimonials'>
        <div className='testimonial-block'>
          <h1>Testimonials</h1>
          <Testimonial customerName='Scott Family' />
        </div>
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

    </div>
  );
};

export default Home;