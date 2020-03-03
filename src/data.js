import data from './data/rickandmorty/rickandmorty.js';

/* Una función que retorna una función (usando bloques y retorno
  explícito para ilustrar el concepto).

  const fn = () => {
  return () => {
    return true;
  };
};

La misma función usando retornos implícitos
const fn = () => () => true; */

//filtrar datos
export const yourHuman = data.results.filter((character) => character.species === 'Human');
export const yourHumanoid = data.results.filter((character) => character.species === 'Humanoid');
export const yourAlien = data.results.filter((character) => character.species === 'Alien');
export const yourAnimal = data.results.filter((character) => character.species === 'Animal');
export const yourParasite = data.results.filter((character) => character.species === 'Parasite');
export const yourZombie = data.results.filter((character) => character.species === 'Zombie');
export const yourRobot = data.results.filter((character) => character.species === 'Robot');
export const yourVampire = data.results.filter((character) => character.species === 'Vampire');
