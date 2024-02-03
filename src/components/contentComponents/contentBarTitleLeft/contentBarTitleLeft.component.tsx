import './contentBarTitleLeft.css';
import { FC, useEffect, useState } from "react";
import isNil from 'lodash/isNil';
import { Paragraph } from '../../../services/content.service';
import Shadow from '../../shadow/shadow.component';
import useImage, { ImageData } from '../../../hooks/useImage';

interface ImageOverride {
  imageName: string
  imageType?: string
  imageWidth?: number
  imageHeight?: number
}

interface ContentBarTitleLeftProps {
  title?: string
  paragraphs: Paragraph[]
  imageOverride?: ImageOverride
}

const ContentBarTitleLeft:FC<ContentBarTitleLeftProps> = ({
  title,
  paragraphs,
  imageOverride,
}) => {
  const {
    getImageDataByName,
    findImageDefinition,
  } = useImage();
  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    setImageData(getImageDataByName([imageOverride?.imageName || '']));
  }, [imageOverride])

  const findParagraphWithImage = (paragraphs: Paragraph[]) => paragraphs.find((p: Paragraph) => !isNil(p.images) && p.images.length > 0);

  const paragraphWithImage = findParagraphWithImage(paragraphs);

  const image = imageData[0] || (!isNil(paragraphWithImage) && !isNil(paragraphWithImage.images) && getImageDataByName([paragraphWithImage.images[0].imageName])[0]) || null;

  const imgPath = findImageDefinition(image?.imageSet)({
    type: imageOverride?.imageType,
    width: imageOverride?.imageWidth,
    height: imageOverride?.imageHeight,
  })?.path || '';

  const titleMarkup = !isNil(image) ? (
    <div className='title-container' style={{
      backgroundImage: `url(${imgPath})`,
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