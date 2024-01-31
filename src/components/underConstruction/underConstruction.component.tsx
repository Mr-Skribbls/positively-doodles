import { FC } from 'react';
import './underConstruction.css';

interface UnderConstructionProps {
}

const UnderConstruction:FC<UnderConstructionProps> = () => {
  return (
    <div className='under-construction'>
      <div>Under Construction</div>
      <span>Please forgive the clutter</span>
    </div>
  );
};

export default UnderConstruction;