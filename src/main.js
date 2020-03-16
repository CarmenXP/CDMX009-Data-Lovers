import data from './data/rickandmorty/rickandmorty.js';
import {getCharsBySpecie, getCharsByGender, getMatchBySpecie
  } from './data.js'

// nodos
let button = document.querySelector('#facebook')
let select = document.querySelector('.persona')
let especieSelect = document.querySelector('#especie')
let genderSelect = document.querySelector('#genero')
let getYourCharacter = document.querySelector('#enviar')
let change1= document.querySelector("#registro")
let change2= document.querySelector("#enviar")
const flipCards = document.querySelector('#flipCardsMatch')
let specie = [];

// listeners
button.addEventListener('click', login)
especieSelect.addEventListener('change', getGenderAndSpecie)
//getYourCharacter.addEventListener('click', getRandomCharacter)
change1.addEventListener("click", pantalla1)
change2.addEventListener("click", pantalla2)

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
function pantalla1(){
 document.getElementById("screen1").style.display="none";
 document.getElementById("screen2").style.display="block";
}
function pantalla2(e){
 e.preventDefault();
 document.getElementById("screen2").style.display="none";
 document.getElementById("screen3").style.display="block";
}

//array género y especie
function getGenderAndSpecie(e){
  let specie = e.target.value
  let gender = genderSelect.value
  let list = getCharsByGender(gender)
  let list2 = getCharsBySpecie(specie, list)
  let match = getMatchBySpecie (specie)
  


console.log(match)
}

//  personaje en el dom
//function showCharacter (){
//  let character = choice.values();
  //for (let valor of character){
//  document.getElementById("tuPersonaje").innerHTML += "¡Hola " + `${valor.name}` + "!"}

//match en el dom
function createFlipCardMatch(match) {
  flipCard.innerHTML = '';
  for (let item of match) {
  flipCard.innerHTML +=
  `
<div class="flip-card">
<div class="flip-card-inner">
 <div class= "front">
        <img class= "" height:200px width:200px border-radius: 50% src="${item.image}" alt="">
        <h2 class="" id="name">Name:"${item.name}" </h2> </div>
        <div class="back">
        <p id="species"> Especie:"${item.species}"</p>
        <p id="gender">Género::"${item.gender}"</p>
        <p id="status"> Status:"${item.status}"</p>
        <p id="origin"> Origen:"${item.origin.name}" </p>
        <p id="location"> Ubicación:"${item.location.name}" </p>
        </div>
</div>
</div>
  `
}
}
