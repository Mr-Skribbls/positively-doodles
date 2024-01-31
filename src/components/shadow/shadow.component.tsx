import { FC } from 'react';
import './shadow.css';

interface ShadowProps {
  rgba: string,
}

const Shadow:FC<ShadowProps> = ({rgba}) => {
  return (
    <div className='shadow' style={{
      backgroundColor: `rgba(${rgba})`
    }}></div>
  )
};

export default Shadow;