import { FC } from 'react';
import './moms.css';
import { dogs } from '../../../dogInfo';
import constants from '../../../constants';
import ItemCardList from '../../../components/itemCardList/itemCardList.component';
import PageTitle from '../../../components/pageTitle/pageTitle.component';

interface MomsProps {

}

const Moms:FC<MomsProps> = () => {
  const moms = dogs.filter((dog) => dog.gender === 'F');
  return (
    <div className="moms-page site-container">
      <PageTitle title={`${constants.companyName} Moms`} />
      {moms.map((dog, key) => <ItemCardList key={key} dog={dog} />)}
      {/* {moms.map((dog, key) => <ParallaxItem key={key} image={dog.images.main} dog={dog} />)} */}
    </div>
  );
};

export default Moms;