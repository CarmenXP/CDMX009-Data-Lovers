import data from './data/rickandmorty/rickandmorty.js';
import {getCharsBySpecie,
  getCharsByGender
  }
   from './data.js'


// nodos
let button = document.querySelector('#facebook')
let select = document.querySelector('.persona')
let especieSelect = document.querySelector('#especie')
let genderSelect = document.querySelector('#genero')
let getYourCharacter = document.querySelector('#enviar')
let change1= document.querySelector("#registro")
let change2= document.querySelector("#enviar")
// listeners
button.addEventListener('click', login)
especieSelect.addEventListener('change', getGenderAndSpecie)
getYourCharacter.addEventListener('submit', getRandomCharacter)
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
  let list2 = getCharsBySpecie(specie, list);

console.log(list2)
}

//personaje aleatorio
function getRandomCharacter (getGenderAndSpecie, n, e){
  e.preventDefault()
    let random = [];
    for (let i = 0; i < n; i++) {
      random.push(getGenderAndSpecie[Math.floor(Math.random() * getGenderAndSpecie.length)]);
  };
  console.log(random)
}


//  personaje en el dom
function showCharacter (){
  let character = choice.values();
    for (let valor of character){
        const template = document.createElement('div');
        template.classList.add('character');
        template.innerHTML = `<img src="'+ character.image'"></img>`
          document.getElementById('characterTemplate').appendChild(template)
      };
    }

//  let random = getGenderAndSpecie[Math.floor(Math.random()*getGenderAndSpecie.length)]
//  document.getElementById("tuPersonaje").innerHTML += "¡Hola " + `${valor.name}` + "!"}
