import data from './data/rickandmorty/rickandmorty.js';
import {personaje} from './data.js'
console.log(personaje);

// nodos
let button = document.querySelector('#facebook')

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


//  registro
function registrar(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});
  console.log(email);
  console.log(password);
}

registro.addEventListener("click", registrar)
