import data from './data/rickandmorty/rickandmorty.js';
import {yourHuman,
        yourHumanoid,
      yourAlien,
    yourAnimal,
    yourParasite,
    yourZombie,
    yourRobot,
    yourVampire,
    getSpecie,
    getGender
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
let form = document.querySelector(".persona")

let profile = [];


// listeners
button.addEventListener("click", login)
registro.addEventListener("click", registrar)
form.addEventListener("change",getForm)


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

function getForm(e){
  e.preventDefault()
  profile.push(e.target.value)

  console.log(profile)
}
//NUEVO array
//for(let i=0; i<fo.length; i++){
//  profile.push(fo[i].value);
//  console.log(profile)
//};

//enviar.addEventListener('click', e => {
//  e.preventDefault();
//  e.stopPropagation();
//  alert('works');
//  console.log(getSpecie(e.target.value))
//})





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

//new array con género y especie seleccionada
//let newArray = [saveSpecie].concat(saveGender);
//console.log(newArray)

//let arr = [...saveSpecie,...saveGender];
//console.log(arr)
