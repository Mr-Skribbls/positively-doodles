import { compact } from 'lodash';
import { litters, LitterInfo, LitterState } from "../dogInfo";
import useDateHelper from "./useDateHelper/useDateHelper";

const DELIMITER = '_';

const useLitter = () => {
  const dateHelper = useDateHelper();

  const getLitterId = (litter: LitterInfo) => {
    return [litter.dam.name, litter.sire.name, dateHelper.hyphenatedDate(litter.dueDate)].join(DELIMITER);
  };

  const getLitter = (litters:LitterInfo[]) => (litterId: string) => {
    const [dam, sire, date] = litterId.split(DELIMITER);
    return litters.find((litter) => {
      return litter.dam?.name === dam
          && litter.sire?.name === sire
          && dateHelper.hyphenatedDate(litter.dueDate) === date;
    });
  };

  const litterDescription = (litter: LitterInfo): string => {
    const birthDay = litter.birthDate ? ` on ${litter.birthDate.toDateString()}` : '';

    const parents = compact([litter.dam.name, litter.sire.name]).join(' and ');

    const countPuppiesBy = (property: 'gender' | 'status', value: unknown) => litter.puppies?.filter((puppy) => puppy[property] === value).length;

    const goHomeMessage = (): string => {
      let message;
      switch (litter.state) {
        case LitterState.HomeBound:
          message = `These cute pups are ready to go to their new loving homes.`
          break;
        case LitterState.Puppy:
          message = `These cute pups will be ready to go to their new loving homes ${litter.goHomeDate?.toDateString()}.`
          break;
        default:
          message = '';
          break;
      }

      return message;
    };

    return `We welcomed ${litter.size} adorable ${litter.puppyBreed.expectedSizes.join(' to ')} ${litter.puppyBreed.type} puppies ${birthDay}. ${parents} had ${countPuppiesBy('gender', 'F')} beautiful girls and ${countPuppiesBy('gender', 'M')} handsome boys. ${goHomeMessage()}`;
  }

  return {
    getLitterId,
    getLitter: getLitter(litters),
    litterDescription,
  };
};

export default useLitter;