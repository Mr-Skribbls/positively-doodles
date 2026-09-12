import { createContext, useContext } from 'react';
import { AnimalImage, BreederCentralAnimal, BreederCentralOffspringGroup, OffspringImage } from '@breeder-central/ui';

export interface AnimalDetailsContextValue {
  animals: BreederCentralAnimal[];
  animalImages: AnimalImage[];
  offspringGroups: BreederCentralOffspringGroup[];
  offspringImages: OffspringImage[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const AnimalDetailsContext = createContext<AnimalDetailsContextValue | undefined>(undefined);

const useAnimalDetails = () => {
  const context = useContext(AnimalDetailsContext);

  if (!context) {
    throw new Error('useAnimalDetails must be used within an AnimalDetailsProvider');
  }

  return context;
};

export default useAnimalDetails;
