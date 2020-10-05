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

btnJouerDuo.addEventListener('click', () => {
  
  console.log('Click Btn Jouer Duo');
  let pseudoPlayerTwo = document.getElementById('pseudoPlayerTwo').value;
  localStorage.setItem('pseudoPlayerTwo', pseudoPlayerTwo);
  console.log("adjugé");
  validateFormDuo();
})


function validateFormDuo() {
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

    console.log(pseudoPlayerTwo);
    console.log(pseudoPlayerTwo);
    window.location = "modeDuo.html";

  }
}
