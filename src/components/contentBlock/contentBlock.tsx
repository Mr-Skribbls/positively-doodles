import { FC } from 'react';
import './contentBlock.css';
import DynamicElement from '../dynamicElement/dynamicElement';

interface ContentBlockProps {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
  borderSize?: number;
  borderRadius?: number;
  borderColor?: string;
  [key: string]: unknown;
}

const ContentBlock:FC<ContentBlockProps> = ({
  children,
  as: Component,
  borderSize = 2,
  borderRadius = 15,
  borderColor = '#8B3333',
  ...rest
}) => {

  const border = (borderSize: number) => `${borderSize}px solid ${borderColor}`;

  return (
    <DynamicElement as={Component} style={{
      border: border(borderSize),
      borderRadius: `${borderRadius}px`,
    }} {...rest}>
      {children}
    </DynamicElement>
  )
}

export default ContentBlock;