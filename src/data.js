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

export const getSpecie = data.results.filter((character) => character.species);
export const getGender = data.results.filter((character) => character.gender);

export function getCharsBySpecie(specie, array){
  let list =  array.filter((character) => character.species===specie);
  return list
}

export function getCharsByGender(gender){
  let list =  data.results.filter((character) => character.gender===gender);
  return list
}

export const yourHuman = data.results.filter((character) => character.species === 'Human');
export const yourHumanoid = data.results.filter((character) => character.species === 'Humanoid');
export const yourAlien = data.results.filter((character) => character.species === 'Alien');
export const yourAnimal = data.results.filter((character) => character.species === 'Animal');
export const yourParasite = data.results.filter((character) => character.species === 'Parasite');
export const yourZombie = data.results.filter((character) => character.species === 'Zombie');
export const yourRobot = data.results.filter((character) => character.species === 'Robot');
export const yourVampire = data.results.filter((character) => character.species === 'Vampire');
