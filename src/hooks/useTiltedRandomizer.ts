import { forEach, reduce, shuffle } from 'lodash';
import { useState } from 'react';
import { getRandomInt } from '../services/random.service';

/**
 * Provides a next function that will return a random choice from 1 to numChoices. The longer the choice goes without being chosen the more likely it is to be chosen. 
 * @param numChoices positive number of choices
 */
const useTiltedRandomizer = (numChoices: number) => {
  const [ choices, setChoices ] = useState<{[choice: number]: number[]}>(reduce(Array.from({length: numChoices}, (_, i) => i + 1), (prev: {[i: number]: number[]}, curr) => {
    prev[curr] = [curr];
    return prev;
  }, {}));

  const next = () => {
    const bag = shuffle(reduce(choices, (bag: number[], chances) => [...bag, ...chances], []));
    const idx = getRandomInt(0, bag.length - 1);
    const winner = bag[idx];
    choices[winner] = [];
    forEach(choices, (chances, choice) => chances.push(Number(choice)));
    setChoices(choices);
    return winner;
  }

  return { next };
};

export default useTiltedRandomizer;