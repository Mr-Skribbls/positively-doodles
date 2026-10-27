import { FC, ReactNode, useMemo } from 'react';
import { useBreederCentral } from '@breeder-central/ui';
import { AnimalDetailsContext } from './animalDetails.context';

export const AnimalDetailsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const breederCentral = useBreederCentral(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY);

  const value = useMemo(() => ({
    animals: breederCentral.animals,
    animalImages: breederCentral.animalImages,
    offspringGroups: breederCentral.offspringGroups,
    offspringImages: breederCentral.offspringImages,
    loading: breederCentral.loading,
    error: breederCentral.error,
    refetch: breederCentral.refetch,
  }), [breederCentral.animals, breederCentral.animalImages, breederCentral.offspringGroups, breederCentral.offspringImages, breederCentral.loading, breederCentral.error, breederCentral.refetch]);

  return (
    <AnimalDetailsContext.Provider value={value}>
      {children}
    </AnimalDetailsContext.Provider>
  );
};

export default AnimalDetailsProvider;
