import data from './data/rickandmorty/rickandmorty.js';
import {yourHuman,
        yourHumanoid,
      yourAlien,
    yourAnimal,
    yourParasite,
    yourZombie,
    yourRobot,
    yourVampire,
  }
   from './data.js'
//console.log(yourHuman, yourHumanoid,yourAlien,
//yourAnimal,
//yourParasite,
//yourZombie,
//yourRobot,
//yourVampire,
//);

// nodos
let button = document.querySelector('#facebook')
var specieList = document.getElementsByClassName("clase")
let saveSpecie = [];
var genderList = document.getElementsByClassName("sexo")
let saveGender = [];


// listeners
button.addEventListener("click", login)
registro.addEventListener("click", registrar)

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

//funcion lista especies y género
for(let i = 0; i < specieList.length ; i++) {
  saveSpecie.push(specieList[i].value);
};
console.log(saveSpecie)

for(let i=0; i<genderList.length; i++){
  saveGender.push(genderList[i].value);
};

console.log(genderList.value)

//new array con género y especie seleccionada
//let newArray = [saveSpecie].concat(saveGender);
//console.log(newArray)

//let arr = [...saveSpecie,...saveGender];
//console.log(arr)
