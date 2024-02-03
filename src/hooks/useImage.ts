import isNil from 'lodash/isNil';
import imageData from '../json/imageDictionary.json';
import { List, ListIterateeCustom, includes, some } from 'lodash';

interface CenterOfFocus {
  x: number
  y: number
}

export interface ImageDefinition {
  path: string
  type: string
  width: number
  height: number
}

export interface ImageData {
  name: string
  alt: string
  classes: string[]
  centerOfFocus: CenterOfFocus
  defaultPath: string
  imageSet: ImageDefinition[]
}

const getImageDataByName = (names: string[]): ImageData[] => imageData.filter((data) => names.includes(data.name));

type Predicate = <T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>) => boolean;

const getImageDataByClassName = (className: string[], predicate: Predicate): ImageData[] => imageData.filter((data) => predicate(className, (c) => includes(data.classes, c)));

const findImageDefinition = (imageDefinitions: ImageDefinition[]) => ({
  type,
  width,
  height,
}: {
  type?: string
  width?: number
  height?: number
}): ImageDefinition | undefined => {
  if(isNil(imageDefinitions)) return;
  const filter = (filterBy: 'type' | 'width' | 'height') => (value: string | number) => (imageDefinition: ImageDefinition) => imageDefinition[filterBy] === value;

  const filters: ((imageDefinition: ImageDefinition) => boolean)[] = [];

  if(!isNil(type)) {
    filters.push(filter('type')(type))
  }
  if(!isNil(width)) {
    filters.push(filter('width')(width));
  }
  if(!isNil(height)) {
    filters.push(filter('height')(height));
  }

  return imageDefinitions.find((imageDefinition) => {
    return filters.every((filter) => filter(imageDefinition));
  });
}

const useImage = () => {
  return {
    getImageDataByName,
    getImageDataByClassName,
    findImageDefinition,
  }
}

export default useImage;