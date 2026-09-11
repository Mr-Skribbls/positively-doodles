import { compact } from 'lodash';
import { litters, LitterInfo, LitterState } from "../dogInfo";
import useDateHelper from "./useDateHelper/useDateHelper";
import { BreederCentralOffspringGroup } from '@breeder-central/ui';
import useAnimalDetails from './useAnimalDetails';
import { useMemo } from 'react';

const DELIMITER = '_';

const useLitter = (litter: BreederCentralOffspringGroup | null) => {
  const dateHelper = useDateHelper();
  const { animals } = useAnimalDetails();

  const litterParents = useMemo(() => {
    const damId = litter?.animals.find((animal) => animal.role === 'Mother')?.animalId;
    const sireId = litter?.animals.find((animal) => animal.role === 'Father')?.animalId;

    const dam = animals.find((animal) => animal.id === damId);
    const sire = animals.find((animal) => animal.id === sireId);

    return {
      dam,
      sire,
    };
  }, [animals, litter?.animals]);

  const litterParentText = useMemo(() => {
    const { dam, sire } = litterParents;
    return compact([dam?.name, sire?.name]).join(' and ');
  }, [litterParents]);

  const litterPuppies = useMemo(() => {
    const litterPuppyIds = (litter?.animals ?? [])
      .filter((animal) => animal.role === 'Child')
      .map((animal) => animal.animalId);

    return animals.filter((animal) => litterPuppyIds.includes(animal.id));
  }, [animals, litter?.animals]);

  const litterDescription2 = useMemo(() => {
    const birthday = litter?.events.find((event) => event.name === 'birth')?.date ?? '';
    const goHomeDay = litter?.events.find((event) => event.name === 'go home')?.date ?? '';

    const birthDate = new Date(birthday);
    const goHomeDate = new Date(goHomeDay);

    const countPuppiesBy = (property: 'gender' | 'state', value: unknown) => litterPuppies.filter((puppy) => puppy[property] === value).length;

    const litterPuppyIds = litterPuppies.map((puppy) => puppy.id);

    const goHomeMessage = (): string => {
      if(goHomeDate >= new Date()) {
        return 'These cute pups are ready to go to their new loving homes.';
      }

      if(goHomeDate) {
        return `These cute pups will be ready to go to their new loving homes ${goHomeDate.toDateString()}.`;
      }

      return '';
    };

    const pluralCheck = (count: number) => count > 1 ? 's' : '';

    const girlCount = countPuppiesBy('gender', 'F');
    const boyCount = countPuppiesBy('gender', 'M');

    const girlMessage = girlCount > 0 ? `${girlCount} beautiful girl${pluralCheck(girlCount)}` : null;
    const boyMessage = boyCount > 0 ? `${boyCount} handsome boy${pluralCheck(boyCount)}` : null;
    const puppyCountMessage = compact([girlMessage, boyMessage]).join(' and ');

    return `We welcomed ${litterPuppyIds.length} adorable puppies ${birthDate.toDateString()}. ${litterParentText} had ${puppyCountMessage}. ${goHomeMessage()}`;
  }, [litter?.events, litterParentText, litterPuppies]);








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
  };

  const priceDisclaimer = () => {
    return 'Listed prices are for pet only. If you are a breeder looking to purchase one of our puppies for your program contact us for breeder prices.'
  }

  return {
    getLitterId, // deprecated
    getLitter: getLitter(litters), // deprecated
    litterDescription, // deprecated
    priceDisclaimer, // deprecated
    litterDescription2,
    litterPuppies,
    litterParentText,
  };
};

export default useLitter;