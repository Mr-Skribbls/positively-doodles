import { useBreederCentral } from '@breeder-central/ui';

const useAnimalDetails = () => {
  const breederCentral = useBreederCentral(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY);

  return breederCentral;
};

export default useAnimalDetails;