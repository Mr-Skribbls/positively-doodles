import { litters, LitterInfo } from "../dogInfo";
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

  return {
    getLitterId,
    getLitter: getLitter(litters),
  };
};

export default useLitter;