import isNil from 'lodash/isNil';
import { FC } from 'react';
import { PictureSource } from '../../../services/image.service';
import './source.css';

interface SourceProps {
  source: PictureSource
}

interface SourceAttributes {
  srcSet: string,
  media?: string,
}

const createAttrs = (source: PictureSource) => {
  const attrs: SourceAttributes = {
    srcSet: source.path,
  };
  if(!isNil(source.condition)) {
    attrs.media = source.condition;
  }

  return attrs;
};

const Source:FC<SourceProps> = ({source}) => <source {...createAttrs(source)}/>;

export default Source;