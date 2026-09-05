import { useState } from 'react';

export interface BreederCentralImage {
  animal_id: number;
  image_id: string;
  image_filename: string;
  center_x: number;
  center_y: number;
  alt: string;
  signedUrl: string;
}

export interface BreederCentralAnimal {
  id: number;
  description?: string;
  name?: string;
  gender?: 'M' | 'F';
  state?: string;
  images?: BreederCentralImage[];
}

// import.meta.env.VITE_SUPABASE_URL
// import.meta.env.VITE_SUPABASE_API_KEY

export const requestAnimals = async (apiUrl: string, apiKey: string): Promise<BreederCentralAnimal[]> => {
  const url = `${apiUrl}/functions/v1/cdn_get_animals`;
  const response = await fetch(url, {
    headers: { 'x-api-key': apiKey },
  });
  const animals = await response.json();
  return animals;
};

const useBreederCentral = (apiUrl: string, apiKey: string) => {
  const [ animals, setAnimals ] = useState<BreederCentralAnimal[]>([]);
  const [ animalImages, setAnimalImages ] = useState<BreederCentralImage[]>([]);


  const getAnimals = async () => {
    const animals = await requestAnimals(apiUrl, apiKey);
    setAnimals(animals);

    const animalImages = animals.reduce((animalImages, animal) => {
      if (animal.images?.length) {
        animalImages = [
          ...animalImages,
          ...animal.images,
        ];
      }
      return animalImages;
    }, [] as BreederCentralImage[]);
    setAnimalImages(animalImages);
  };

  return {
    animals,
    animalImages,
  };
};

export default useBreederCentral;