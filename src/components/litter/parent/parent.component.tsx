import isNil from 'lodash/isNil';
import { FC } from 'react';
import { Dog } from '../../../dogInfo';
import { Link } from 'react-router-dom';
import './parent.css';
import SourceSetImage from '../../sourceSetImage/sourceSetImage.component';

interface ParentProps {
  dog: Dog,
}

const Parent:FC<ParentProps> = ({
  dog,
}) => {
  return (
    <article className="parent">
      <figure className="image">
          <SourceSetImage imageName={dog.images.main} sizesRules={['50%']} />
      </figure>
      <figcaption>
        <h3>{dog.name}</h3>
        <ul>
          <li><span>Weight:</span> <div>{dog.weight}</div></li>
          <li><span>Breed:</span> <div>{dog.breed.class} {dog.breed.size} {dog.breed.type}</div></li>
          {(!isNil(dog.additionalInformation) || !isNil(dog.description)) && <li>
            <span>Additional Information:</span>
            <div>
              {dog.additionalInformation?.map((info, key) => <p key={key}>{info}</p>)}
              {dog.description}
            </div>
          </li>}
          {!isNil(dog.link) && <li>
            <Link className='' to={dog.link}>
              More
            </Link>
          </li>}
          {/* <li><span>Genetics:</span> <div>{!isNil(dog.testing.genetics) && map(dog.testing.genetics,((test, key) => <div key={key}>{test.result}-{test.desc}</div>))}</div></li> */}
        </ul>
      </figcaption>
    </article>
  );
};

export default Parent;