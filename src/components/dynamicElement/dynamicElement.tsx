import { FC } from 'react';

interface DynamicElementProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>;
  children: React.ReactNode;
  [key: string]: unknown;
}

const DynamicElement:FC<DynamicElementProps> = ({ 
  as: Element = 'div',
  children,
  ...rest
}) => <Element {...rest}>{children}</Element>;

export default DynamicElement;