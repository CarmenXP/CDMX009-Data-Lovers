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
let form= document.querySelector('#formulario')

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

// listeners
button.addEventListener("click", login)
registro.addEventListener("click", registrar)
form.addEventListener("submit",getForm)


//  registro
function registrar(){
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});
}

//funcion enviar formulario
function getForm(e){
  e.preventDefault()
  let fo=e.target

  console.log(especie.value)
  console.log(especie.value)
}
