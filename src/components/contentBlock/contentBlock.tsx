import { FC } from 'react';
import './contentBlock.css';
import DynamicElement from '../dynamicElement/dynamicElement';

interface ContentBlockProps {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
  borderSize?: number;
  borderRadius?: number;
  borderColor?: string;
  style?: {[key:string]: unknown};
  [key: string]: unknown;
}

const ContentBlock:FC<ContentBlockProps> = ({
  children,
  as: Component,
  borderSize = 2,
  borderRadius = 15,
  borderColor = '#8B3333',
  style,
  ...rest
}) => {

  const border = (borderSize: number) => `${borderSize}px solid ${borderColor}`;

  const componentStyle = {
    border: border(borderSize),
    borderRadius: `${borderRadius}px`,
    overflow: 'hidden',
  }

  return (
    <DynamicElement as={Component} style={{...componentStyle, ...style}} {...rest}>
      {children}
    </DynamicElement>
  )
}

export default ContentBlock;