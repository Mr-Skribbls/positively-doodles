import './socialIcon.css';
import { FC } from 'react';
import Icons from '../../socialIcons/social-icons.svg';

interface SocialIconProps {
  name: string,
  color?: string,
  size?: number,
}

const SocialIcon:FC<SocialIconProps> = ({
  name,
  color,
  size,
}) => {
  return (
    <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  )
}

export default SocialIcon;