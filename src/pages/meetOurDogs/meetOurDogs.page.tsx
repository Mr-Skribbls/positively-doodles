import { FC } from 'react';
import './MeetOurDogs.css';
import { dogs } from '../../dogInfo';
import constants from '../../constants';
import PageTitle from '../../components/pageTitle/pageTitle.component';
import ItemCardList from '../../components/itemCardList/itemCardList.component';

interface MeetOurDogsProps {

}

const MeetOurDogs:FC<MeetOurDogsProps> = () => {
  return (
    <div className="meet-our-dogs-page ">
      <PageTitle title={`${constants.companyName} Parents`} />
      {dogs.filter((dog) => dog.isInternal).map((dog, key) => <ItemCardList key={key} dog={dog} />)}
    </div>
  );
};

export default MeetOurDogs;