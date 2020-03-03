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
