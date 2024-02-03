import { useState } from "react";
import { ImageDetailsList, ImageDetails } from "../services/image.service";

const useImageFilterer = (
  images:ImageDetailsList, 
  imageFilter:(images: ImageDetailsList) => (...filters: string[]) => ImageDetails[]
) => {
  const [filterer] = useState<(...filters: string[]) => ImageDetails[]>(() => imageFilter(images));

  return filterer;
};

export default useImageFilterer;