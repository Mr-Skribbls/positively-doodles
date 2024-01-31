import { useState } from "react";
import { ImageDetails, ImageDetailsList } from "../Services/Image.Service";

const useImageFilterer = (images:ImageDetailsList, imageFilter:(images: ImageDetailsList) => (...filters: string[]) => ImageDetails[]) => {
  const [filterer] = useState<(...filters: string[]) => ImageDetails[]>(() => imageFilter(images));

  return filterer;
};

export default useImageFilterer;