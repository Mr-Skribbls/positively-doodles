import { FC } from 'react';
import './home.css';
import isNil from 'lodash/isNil';
import ContentBarTitleLeft from '../../components/contentComponents/contentBarTitleLeft/contentBarTitleLeft.component';
import content, { ArticleRecord, Section } from '../../services/content.service';
import images from '../../services/image.service';
import { Parallax } from 'react-parallax';

interface HomeProps {

}

const Home:FC<HomeProps> = () => {
  const findSection = (article:ArticleRecord, sectionTitle: string) => article.sections.find((section) => section.sectionTitle === sectionTitle);

  const ourGoalSection:Section | undefined = findSection(content.articles['about positively doodles'], 'Our Goal');

  const whyChooseUsSection: Section | undefined = findSection(content.articles['about positively doodles'], 'Why Choose Positively Doodles?');

  return (
    <div className="home-page">
      <Parallax
        className='parallax'
        bgImage={images.liberty001.path}
        bgImageAlt={images.liberty001.alt}
        bgClassName='parallax-image home-image'
        strength={300}>
          <div className='parallax-content-container'>
            <div className="parallax-content"></div>
          </div>
      </Parallax>

      <div className="content">
        {!isNil(ourGoalSection) && <ContentBarTitleLeft title={ourGoalSection.sectionTitle} paragraphs={ourGoalSection.paragraphs} />}
        
        {!isNil(whyChooseUsSection) && <ContentBarTitleLeft title={whyChooseUsSection.sectionTitle} paragraphs={whyChooseUsSection.paragraphs} imageOverride={images['liberty003']} />}

      </div>
      
    </div>
  );
};

export default Home;