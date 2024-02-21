import { FC } from 'react';

import './puppiesLitterCard.css';
import { LitterInfo, Puppy } from '../../../../dogInfo';
import { isNil } from 'lodash';
import SourceSetImage from '../../../sourceSetImage/sourceSetImage.component';
import useDateHelper from '../../../../hooks/useDateHelper';

interface PuppiesLitterCardProps {
  litter: LitterInfo
}

const puppyCard = (puppy: Puppy, startingPrice: number, key: number) => {
  return (
    <figure key={key} className='puppy-card'>
      <SourceSetImage imageName={puppy.imageName} sizesRules={['250px']} />
      <figcaption>
        <h4>{puppy.name}</h4>
        <p className={puppy.available ? 'available' : 'reserved'}>{puppy.available ? `$${startingPrice + puppy.priceAboveStarting}` : "Reserved"}</p>
        <p>{puppy.gender === "M" ? "Boy" : "Girl"}</p>
        <p>{puppy.description}</p>
      </figcaption>
    </figure>
  )
}

const PuppiesLitterCard:FC<PuppiesLitterCardProps> = ({litter}) => {
  const dateHelper = useDateHelper();
  return (
    <section className='puppies-litter-card'>
      <h2>{litter.dam.name} and {litter.sire.name} Litter</h2>
      {!isNil(litter.goHomeDate) && <span>Go home date: {dateHelper.hyphenatedDate(litter.goHomeDate)}</span>}
      {!isNil(litter.puppies) && litter.puppies.map((puppy, key) => puppyCard(puppy, litter.startingPrice, key))}
    </section>
  )
};

export default PuppiesLitterCard;