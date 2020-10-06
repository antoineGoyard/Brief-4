let btnLogin = document.getElementById('btnMenu');
let score = document.getElementById('score');
let pseudoPlayerOne;
let pseudoPlayerTwo;
let inputPseudo = document.getElementById('pseudoInscription');


btnLogin.addEventListener('click', () => {
  console.log("ok");
  pseudoPlayerOne = document.getElementById('pseudoInscription').value;
  localStorage.setItem('pseudoPlayerOne', pseudoPlayerOne);
  validateForm();
});

inputPseudo.addEventListener('keypress', () => {

  var e = window.event || e;
  var touche = e.charCode || e.keyCode;
  if (touche == 13) {
    e.preventDefault();

    pseudoPlayerOne = document.getElementById('pseudoInscription').value;
    localStorage.setItem('pseudoPlayerOne', pseudoPlayerOne);
    console.log("ca marche");
    validateForm();
    // sectionMenu.classList.remove('hidden');
    // sectionPseudo.classList.add('hidden');
    // sectionOption.classList.add('hidden');
    // sectionScore.classList.add('hidden');
    // sectionMulti.classList.add('hidden');
    console.log('Click Btn Menu');
  }
})

function validateForm() {
  let x = document.forms["logginForm"]["pseudo"].value;
  console.log(x);
  console.log("test");
  if (x == "") {
    alert("Veuillez indiquer un pseudo pour jouer!");
    return false;
  }
  else {
    sectionMenu.classList.remove('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden');
    sectionMulti.classList.add('hidden');
    document.getElementById('PlayerOneDuo').value = x;
    console.log('Click Btn Menu');
  }
}

document.getElementById('btnJouerDuo').addEventListener('click', () => {
  let pseudoPlayerTwo = document.getElementById('pseudoPlayerTwo').value;
  localStorage.setItem('pseudoPlayerTwo', pseudoPlayerTwo);
  let pseudoPlayerOneDUO = document.getElementById('PlayerOneDuo').value;
  localStorage.setItem('pseudoPlayerOne', pseudoPlayerOneDUO);
  console.log(pseudoPlayerOneDUO);
  console.log(pseudoPlayerTwo);
  //alert('choup');
  if (pseudoPlayerTwo == pseudoPlayerOneDUO) {
    alert("Veuillez indiquer un  pseudo différent!");
  }
  else if (pseudoPlayerOneDUO == "") {
    alert("Player 1 veuillez indiquer un pseudo valide pour jouer!")
  }
  else if (pseudoPlayerTwo == "") {
    alert("Player 2 veuillez indiquer un pseudo valide pour jouer!")
  }
  else {
    window.location = "modeDuo.html";
  }

  console.log('Click Btn Jouer Duo');

  console.log("adjugé");
 
  //verifPseudoDuo(pseudoPlayerOne, pseudoPlayerTwo);
})


/*function validateFormDuo() {
  console.log("ca passe");
  let y = document.forms["formDuo"]["pseudo2"].value;
  if (y == "") {
    alert("Veuillez indiquer un pseudo pour jouer!");
    return false;
  }
   if (x == y){
     alert("Veuillez indiquer un autre pseudo!");
     return false;
   }
  else {

    

  }
}*/

function verifPseudoDuo(pseudoP1, pseudoP2) {
  if (pseudoP1.value === pseudoP2.value) {
    alert("Veuillez indiquer un  pseudo différent!");
  }
  else if (pseudoP1.value == "") {
    alert("Player 1 veuillez indiquer un pseudo valide pour jouer!")
  }
  else if (pseudoP2.value == "") {
    alert("Player 2 veuillez indiquer un pseudo valide pour jouer!")
  }
  else {
    alert('sa devais être bon')
    window.location = "modeDuo.html";
  }

}
