import data from './data/rickandmorty/rickandmorty.js';
import {getSpecie,
    getGender,
    yourHuman,
    getCharsBySpecie,
    getCharsByGender
  }
   from './data.js'
console.log(getSpecie,getGender);

// nodos
let button = document.querySelector('#facebook')
let form = document.querySelector(".persona")
let profile = [];
let character = document.querySelector("#enviar")
let especieSelect = document.querySelector('#especie')
let genderSelect = document.querySelector('#genero')

// listeners
especieSelect.addEventListener('change', getForm)
button.addEventListener("click", login)
registro.addEventListener("click", registrar)
form.addEventListener("change",getForm)
character.addEventListener("click", getCharacter)

//  login
function login(){
  var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
    var user = result.user;
    console.log(user)
  }).catch(function(error) {
    console.log(error)
  });
}

function registrar(){
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});
}

//array género y especie
function getForm(e){
  let specie = e.target.value
  let gender = genderSelect.value
  let list = getCharsByGender(gender)
  let list2 = getCharsBySpecie(specie, list)
  console.log(list2)
  // Dibujar en el dom

}

//obtener personaje filtrado
function getCharacter (profile, e){
  e.preventDefault()

  console.log(profile)

};

  //function getCharacter(profile, getSpecie, e) {
  //  e.preventDefault()
  //  specieList = [];
  //  for (var i = 0; i < profile.length; i++) {
  //    specieList.push(getSpecie(profile[i].value));
  //  }
  //  console.log(specieList);
  //}


//funcion lista especies y género
//for(let i = 0; i < specieList.length ; i++) {
//  saveSpecie.push(specieList[i].value);
//};
//console.log(saveSpecie)
//
//for(let i=0; i<genderList.length; i++){
//  saveGender.push(genderList[i].value);
//};
//
//console.log(genderList.value)
