import { FC } from 'react';
import ReactFocusPointImage from 'react-focus-point-image';
// import Picture from '../Picture/Picture';
import { Dog } from '../../dogInfo';
// import isArray from 'lodash/isArray';

import './itemCardList.css';
import { Link } from 'react-router-dom';

interface ItemCardListProps {
  dog: Dog,
}

const ItemCardList:FC<ItemCardListProps> = ({ dog }) => {
  return (
    <Link to={`/dog/${dog.name}`} className="item-card-list">
      <div className="image">
        <ReactFocusPointImage
          src={dog.images.main.path}
          alt={dog.images.main.alt}
          focusPoint={[
            dog.images.main.centerOfFocus.x,
            dog.images.main.centerOfFocus.y,
          ]}></ReactFocusPointImage>
      </div>
      <figcaption className="fig-container">
        <h2>{dog.name}</h2>
        <div className='about-container'>
          <section className='info-container'>
            <p>{`${dog.breed.size} ${dog.breed.class} ${dog.breed.type}`}</p>
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