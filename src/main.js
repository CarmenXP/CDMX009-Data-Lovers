import data from './data/rickandmorty/rickandmorty.js';
import {getCharsBySpecie,
  getCharsByGender
  }
   from './data.js'


// nodos
let button = document.querySelector('#facebook')
let registro = document.querySelector('#registro')
let select = document.querySelector('.persona')
let especieSelect = document.querySelector('#especie')
let genderSelect = document.querySelector('#genero')
let getYourCharacter = document.querySelector('#enviar')

// listeners
button.addEventListener('click', login)
registro.addEventListener('click', registrar)
especieSelect.addEventListener('change', getGenderAndSpecie)
getYourCharacter.addEventListener('submit', randomCharacter)



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
  //var email = document.querySelector('#email').value;
  //var password = document.querySelector('#password').value;
  //firebase.auth().signInWithEmailAndPassword(email, password)
  //.catch(function(error) {
  //var errorCode = error.code;
  //var errorMessage = error.message;
//});
document.querySelector("#screen1").style.display="none";
document.querySelector("#screen2").style.display="block";
}

//array género y especie
function getGenderAndSpecie(e){
  let specie = e.target.value
  let gender = genderSelect.value
  let list = getCharsByGender(gender)
  let list2 = getCharsBySpecie(specie, list);

console.log(list2)
}

//personaje aleatorio
function randomCharacter (e, getGenderAndSpecie){
  e.preventDefault()


   //let random = getGenderAndSpecie[Math.floor(Math.random()*getGenderAndSpecie.length)]
   //console.log(randomCharacter(getGenderAndSpecie))
  // personaje en el dom
  //let character = random.values();
  //  for (let valor of character){
  //  document.getElementById("tuPersonaje").innerHTML += "¡Hola " + `${valor.name}` + "!"}
