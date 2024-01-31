import { FC } from 'react';

import './puppiesLitterCard.css';
import { LitterInfo } from '../../../../dogInfo';

interface PuppiesLitterCardProps {
  litter: LitterInfo
}

// const PuppiesLitterCard:FC<PuppiesLitterCardProps> = ({
//   litter,
// }) => {
//   return (
//     <div>puppies litter card.</div>
//   )
// };

const PuppiesLitterCard:FC<PuppiesLitterCardProps> = () => {
  return (
    <div>puppies litter card.</div>
  )
};

export default PuppiesLitterCard;