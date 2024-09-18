import { FC, useEffect } from 'react';
import './aboutBernedoodles.css';
import Article from '../../components/contentComponents/article/article.component';
import useContent from '../../hooks/useContent';
import { isNil } from 'lodash';

interface AboutBernedoodlesProps {

}

const AboutBernedoodles:FC<AboutBernedoodlesProps> = () => {
<<<<<<< Updated upstream
  const { findArticle } = useContent();
=======
>>>>>>> Stashed changes

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const breedsArticle = findArticle('breeds');
  const generationsArticle = findArticle('generations');
  const furnishingArticle = findArticle('furnishing');

  return (
    <div className='about-bernedoodles site-container'>
      {!isNil(breedsArticle) && <Article articleRecord={breedsArticle}></Article>}
      {!isNil(generationsArticle) && <Article articleRecord={generationsArticle}></Article>}
      {!isNil(furnishingArticle) && <Article articleRecord={furnishingArticle}></Article>}
    </div>
  )
};

export default AboutBernedoodles;