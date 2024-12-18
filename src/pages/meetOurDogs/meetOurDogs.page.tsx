import { FC, useEffect } from 'react';
import './meetOurDogs.css';
import { dogs } from '../../dogInfo';
import constants from '../../constants';
import PageTitle from '../../components/pageTitle/pageTitle.component';
import ItemCardList from '../../components/itemCardList/itemCardList.component';

interface MeetOurDogsProps {

}

const MeetOurDogs:FC<MeetOurDogsProps> = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="meet-our-dogs-page site-container">
      <PageTitle title={`${constants.companyName} Parents`} />
      {dogs.filter((dog) => dog.isInternal).map((dog, key) => <ItemCardList key={key} dog={dog} />)}
    </div>
  );
};

export default MeetOurDogs;