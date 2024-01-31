import { FC } from 'react';
import './Dads.css';
import { dogs } from '../../../dogInfo';
import constants from '../../../constants';
import PageTitle from '../../../components/pageTitle/pageTitle.component';
import ItemCardList from '../../../components/itemCardList/itemCardList.component';

interface DadsProps {

}

const Dads:FC<DadsProps> = () => {
  const dads = dogs.filter((dog) => dog.gender === 'M');
  return (
    <div className="dads-page">
      <PageTitle title={`${constants.companyName} Dads`} />
      {dads.map((dog, key) => <ItemCardList key={key} dog={dog} />)}
      {/* {dads.map((dog, key) => <ParallaxItem key={key} image={dog.images.main} dog={dog} />)} */}
    </div>
  );
};

export default Dads;