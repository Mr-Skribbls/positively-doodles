import './contentBarTitleLeft.css';
import { FC } from "react";
import isNil from 'lodash/isNil';
import { Paragraph } from '../../../services/content.service';
import images, { ImageDetails } from '../../../services/image.service';
import Shadow from '../../shadow/shadow.component';

interface ContentBarTitleLeftProps {
  title?: string,
  paragraphs: Paragraph[],
  imageOverride?: ImageDetails,
}

const ContentBarTitleLeft:FC<ContentBarTitleLeftProps> = ({
  title,
  paragraphs,
  imageOverride,
}) => {

  const findParagraphWithImage = (paragraphs: Paragraph[]) => paragraphs.find((p: Paragraph) => !isNil(p.images) && p.images.length > 0);

  const paragraphWithImage = findParagraphWithImage(paragraphs);

  const image = imageOverride || (!isNil(paragraphWithImage) && !isNil(paragraphWithImage.images) && images[paragraphWithImage.images[0].imageName]) || null;

  const titleMarkup = !isNil(image) ? (
    <div className='title-container' style={{
      backgroundImage: `url(${image.path})`,
    }}>
      <div className='text-container'>
        <Shadow rgba='255,255,255,0.4' />
        <h2>{title}</h2>
      </div>
    </div>
  ) : (
    <div className='title-container'>
      <h2>{title}</h2>
    </div>
  );

  return (
    <section className='content-bar-title-left'>
      {titleMarkup}
      <div className='content-container'>
        {paragraphs.map((p, key) => <p key={key}>{p.text}</p>)}
      </div>
    </section>
  )
}

export default ContentBarTitleLeft;