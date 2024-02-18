import { FC } from 'react';
import './home.css';
import isNil from 'lodash/isNil';
import ContentBarTitleLeft from '../../components/contentComponents/contentBarTitleLeft/contentBarTitleLeft.component';
import content, { ArticleRecord, Section } from '../../services/content.service';
import SourceSetImage from '../../components/sourceSetImage/sourceSetImage.component';
import Carousel from '../../components/carousel/carousel.component';

interface HomeProps {

}

const Home:FC<HomeProps> = () => {

  const findSection = (article:ArticleRecord, sectionTitle: string) => article.sections.find((section) => section.sectionTitle === sectionTitle);

  const ourGoalSection:Section | undefined = findSection(content.articles['about positively doodles'], 'Our Goal');

  const whyChooseUsSection: Section | undefined = findSection(content.articles['about positively doodles'], 'Why Choose Positively Doodles?');

  return (
    <div className="home-page site-container">
      <Carousel imageClasses={['puppy']} />

      <div className="content">
        {!isNil(ourGoalSection) && <ContentBarTitleLeft title={ourGoalSection.sectionTitle} paragraphs={ourGoalSection.paragraphs} />}
        
        {!isNil(whyChooseUsSection) && <ContentBarTitleLeft title={whyChooseUsSection.sectionTitle} paragraphs={whyChooseUsSection.paragraphs} imageOverride={{
          imageName: 'liberty003',
          imageType: 'png',
          imageWidth: 450,
        }} />}

      </div>

      <div className="badges">
        <div className="badge">
          <a target='_blank' href="https://www.gooddog.com/breeders/positively-doodles-illinois">
            <SourceSetImage imageName='goodDogBadge' sizesRules={['(max-width: 550px) 90%', '250px']} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Home;