import { FC } from 'react';
import './aboutBernedoodles.css';
import Article from '../../components/contentComponents/article/article.component';
import content from '../../services/content.service';

interface AboutBernedoodlesProps {

}

const AboutBernedoodles:FC<AboutBernedoodlesProps> = () => {
  return (
    <div className='about-bernedoodles site-container'>
      <Article articleRecord={content.articles.breeds}></Article>
      <Article articleRecord={content.articles.generations}></Article>
      <Article articleRecord={content.articles.furnishing}></Article>
    </div>
  )
};

export default AboutBernedoodles;