import { example } from './data.js';

// nodos
let button = document.querySelector('#facebook')


function login(){
  var provider = new firebase.auth.FacebookAuthProvider();
  //function accederFacebook(){
    //let logIn = document.getElementById('facebook');
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






//funciones para botones
function registrar(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
}
