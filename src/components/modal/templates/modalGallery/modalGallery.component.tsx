import { FC } from 'react';
// import Picture from '../../../Picture/Picture';
import { ImageDetails } from '../../../../services/image.service';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './modalGallery.css';

interface ModalGalleryProps {
  images: ImageDetails[],
}

// installed - react-image-gallery
// todo - implement the gallery

const ModalGallery:FC<ModalGalleryProps> = ({
  images,
}) => {
  const galleryImages = images.map((img) => ({
    original: img.path,
  }))

  return (
    <div className='modal-gallery-container'>
      {/* {images.map((img, key) => <div className='modal-gallery-image-container'>
        {img && <Picture image={img} className='image'></Picture>}
      </div>)} */}
      <ImageGallery items={galleryImages}></ImageGallery>
    </div>
  )
}

export default ModalGallery;