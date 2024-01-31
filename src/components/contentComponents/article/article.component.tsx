import { FC } from 'react';
import isNil from 'lodash/isNil';
import isEmpty from 'lodash/isEmpty';
import './article.css';
import { ArticleRecord, Section, Paragraph } from '../../../services/content.service';
import images from '../../../services/image.service';
import Picture from '../../picture/picture.component';

interface ArticleProps {
  articleRecord: ArticleRecord,
}

interface ArticleTitleProps {
  articleTitle?: string,
}

interface SectionTitleProps {
  sectionTitle?: string,
}

interface ArticleSectionProps {
  section: Section,
}

interface ContentProps {
  content: Paragraph
}

const isNilOrEmpty = (thing?: unknown):boolean => isNil(thing) || isEmpty(thing);

const ArticleTitle:FC<ArticleTitleProps> = ({articleTitle}) => {
  if(isNilOrEmpty(articleTitle)) {
    return null;
  }
  return <h1>{articleTitle}</h1>
};

const SectionTitle:FC<SectionTitleProps> = ({sectionTitle}) => {
  if(isNilOrEmpty(sectionTitle)) {
    return null;
  }
  return <h2>{sectionTitle}</h2>
}

const Content:FC<ContentProps> = ({content}) => {
  const pictures = content.images?.map((image, key) => {
    return (
      <Picture key={key} className={image.className} image={images[image.imageName]}></Picture>
    );
  });

  if(!isNil(content.images)) {
    return (
      <p>
        {pictures}
        {content.text}
      </p>
    )
  }
  return (
    <p>{content.text}</p>
  );
}

const ArticleSection: FC<ArticleSectionProps> = ({section}) => {
  const paragraphs = section.paragraphs.map((paragraph, key) => <Content key={key} content={paragraph}></Content>);

  return (
    <section>
      <SectionTitle sectionTitle={section.sectionTitle}></SectionTitle>
      {paragraphs}
    </section>
  )
};

const Article:FC<ArticleProps> = ({articleRecord}) => {

  const sections = articleRecord.sections.map((section, key) => <ArticleSection key={key} section={section}></ArticleSection>)

  return (
    <article>
      <ArticleTitle articleTitle={articleRecord.articleTitle}></ArticleTitle>
      {sections}
    </article>
  );
};

export default Article;