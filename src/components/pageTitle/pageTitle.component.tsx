import { FC } from 'react';
import './pageTitle.css';

interface PageTitleProps {
  title: string,
  subtitle?: string
}

const PageTitle:FC<PageTitleProps> = ({title, subtitle}) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default PageTitle;