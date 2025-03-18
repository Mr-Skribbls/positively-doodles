import './copyright.css';
import { FC } from 'react';

interface CopyrightProps {

}

const Copyright:FC<CopyrightProps> = () => {
  const year = (new Date()).getFullYear();
  return (
    <div className='copyright'>© 2023-{year}, Positively Doodles</div>
  )
};

export default Copyright;