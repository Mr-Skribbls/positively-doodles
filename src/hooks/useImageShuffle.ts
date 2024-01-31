import { useState } from "react";
import { ImageDetails } from "../Services/Image.Service";
import shuffle from 'lodash/shuffle';

const useImageShuffle = (images:ImageDetails[]) => {
  const [shuffledImages] = useState<ImageDetails[]>(() => shuffle(images));

  return shuffledImages;
};

export default useImageShuffle;