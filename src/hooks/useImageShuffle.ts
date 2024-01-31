import { useState } from "react";
import shuffle from 'lodash/shuffle';
import { ImageDetails } from "../services/image.service";

const useImageShuffle = (images:ImageDetails[]) => {
  const [shuffledImages] = useState<ImageDetails[]>(() => shuffle(images));

  return shuffledImages;
};

export default useImageShuffle;