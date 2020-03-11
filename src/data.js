import data from './data/rickandmorty/rickandmorty.js';

//filter by gender
export function getCharsByGender(gender){
  let list =  data.results.filter((character) => character.gender===gender);
  return list
}

//filter by specie
export function getCharsBySpecie(specie, array){
  let list =  array.filter((character) => character.species===specie);
  return list
}
