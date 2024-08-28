import { FC } from 'react';
import { Dog } from '../../dogInfo';

import './itemCardList.css';
import { Link } from 'react-router-dom';
import SourceSetImage from '../sourceSetImage/sourceSetImage.component';
import isNil from 'lodash/isNil';

interface ItemCardListProps {
  dog: Dog,
}

const ItemCardList:FC<ItemCardListProps> = ({ dog }) => {
  return (
    <Link to={`/dog/${dog.name}`} className="item-card-list">
      <div className="image">
        <SourceSetImage imageName={dog.images.main} sizesRules={['(max-width: 750px) 100%, 30%']} />
      </div>
      <figcaption className="fig-container">
        <h2>{dog.name}</h2>
        <div className='about-container'>
          <section className='info-container'>
            <p>{`${isNil(dog.breed.size) ? '' : dog.breed.size} ${dog.breed.class} ${dog.breed.type}`}</p>
            <p>{`weight: ${dog.weight} lbs`}</p>
          </section>
          <section className='desc-container'>
            <p>{dog.description}</p>
          </section>
        </div>
      </figcaption>
    </Link>
  );
};

export default ItemCardList;