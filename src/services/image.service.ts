import forEach from 'lodash/forEach';
import imageDictionary from '../json/imageDictionary.json';

interface COF {
  x: number,
  y: number,
}

export interface PictureSource {
  path: string,
  condition?: string,
}

export interface Picture {
  sources: PictureSource[],
}

export interface ImageDetails {
  path: string,
  picture?: Picture,
  alt: string,
  classes: string[],
  centerOfFocus: COF,
}

export interface ImageDetailsList {
  [key: string]: ImageDetails,
}

const hasClass = (image:ImageDetails, className:string) => image.classes.includes(className);

const hasClassIn = (image:ImageDetails, classNames:string[]) => classNames.every((className) => hasClass(image, className));

export const filter = (images:ImageDetailsList) => (...filters:string[]) => {
  let filteredImages:ImageDetails[] = [];

  for(const image in images) {
    if(images.hasOwnProperty(image) && hasClassIn(images[image], filters)) {
      filteredImages = [...filteredImages, images[image]];
    }
  }

  return filteredImages;
};

const images: ImageDetailsList = {};

forEach(imageDictionary, (record) => images[record.name] = record);

export default images;