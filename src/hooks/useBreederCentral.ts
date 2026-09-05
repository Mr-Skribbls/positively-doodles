import { useEffect, useState } from 'react';

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

const CACHE_KEY = 'breeder-central-animals';
const CACHE_TTL_MS = 60 * 60 * 1000;

interface AnimalCache {
  data: BreederCentralAnimal[];
  expiresAt: number;
}

const readCachedAnimals = (): BreederCentralAnimal[] | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cache: AnimalCache = JSON.parse(raw);
    if (cache.expiresAt > Date.now()) {
      return cache.data;
    }
    localStorage.removeItem(CACHE_KEY);
  } catch {
    // ignore storage read errors
  }
  return null;
};

const writeCachedAnimals = (animals: BreederCentralAnimal[]) => {
  const cache: AnimalCache = {
    data: animals,
    expiresAt: Date.now() + CACHE_TTL_MS,
  };
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // ignore storage write errors
  }
};

const useBreederCentral = (apiUrl: string, apiKey: string) => {
  const [ animals, setAnimals ] = useState<BreederCentralAnimal[]>([]);
  const [ animalImages, setAnimalImages ] = useState<BreederCentralImage[]>([]);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const cached = readCachedAnimals();
      const fetchedAnimals = cached ?? await requestAnimals(apiUrl, apiKey);
      if (!cached) {
        writeCachedAnimals(fetchedAnimals);
      }
      if (cancelled) return;

      setAnimals(fetchedAnimals);

      const flattenedImages = fetchedAnimals.reduce((acc, animal) => {
        if (animal.images?.length) {
          acc = [...acc, ...animal.images];
        }
        return acc;
      }, [] as BreederCentralImage[]);
      setAnimalImages(flattenedImages);
    };

    load();

    return () => { cancelled = true; };
  }, [apiUrl, apiKey]);

  return {
    animals,
    animalImages,
  };
};

export default useBreederCentral;