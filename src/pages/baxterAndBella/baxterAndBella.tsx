
import { FC, useEffect } from 'react';
import useContent from '../../hooks/useContent';
import SourceSetImage from '../../components/sourceSetImage/sourceSetImage.component';
import { isNil } from 'lodash';
import Article from '../../components/contentComponents/article/article.component';
import './baxterAndBella.css';

interface BaxterAndBellaProps {

}

const BaxterAndBella:FC<BaxterAndBellaProps> = () => {
  const { findArticle } = useContent();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const baxterAndBellaArticle = findArticle('baxter and bella');

  return (
    <div className='baxter-and-bella-page site-container'>
      <div className='logo'>
        <a target='_blank' href='https://www.baxterandbella.com/learn-more'>
          <SourceSetImage imageName='Baxter_and_Bella_Partners_Badge' sizesRules={['(max-width: 35vw) 90%', '35vw']} />
        </a>
      </div>

      <p className='discount-code'>Discount Code: <span>POSITIVELYDOODLES</span></p>

      {!isNil(baxterAndBellaArticle) && <Article articleRecord={baxterAndBellaArticle}></Article>}

      <p className='learn-more'>LEARN MORE about BAXTER & Bella <a target="_blank" href='https://www.baxterandbella.com/learn-more'>HERE</a></p>
    </div>
  )
};

export default BaxterAndBella;