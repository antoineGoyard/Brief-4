let btnLogin = document.getElementById('btnMenu');
let score = document.getElementById('score');
let pseudoPlayerOne; //= document.getElementById('pseudoInscription').value;
let pseudoPlayerTwo;
let inputPseudo = document.getElementById('pseudoInscription');

// function setUserPseudoPlayerOne() {
//   pseudoPlayerOne = localStorage.setItem('pseudoPlayerOne', storedPseudoPlayerOne);
//   console.log("test local");
// }

btnLogin.addEventListener('click', () => {
  console.log("ok");
  
  pseudoPlayerOne = document.getElementById('pseudoInscription').value;
  localStorage.setItem('pseudoPlayerOne', pseudoPlayerOne);
validateForm();
});

inputPseudo.addEventListener('keypress',()=>{
  var e=window.event || e;
var touche=e.charCode || e.keyCode;
if(touche==13){

  pseudoPlayerOne = document.getElementById('pseudoInscription').value;
  localStorage.setItem('pseudoPlayerOne', pseudoPlayerOne); 
     validateForm();   
        console.log('Click Btn Menu');
}})

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
  validateFormDuo();
  console.log('Click Btn Jouer Duo');
  let pseudoPlayerTwo = document.getElementById('pseudoPlayerTwo').value;
  localStorage.setItem('pseudoPlayerTwo', pseudoPlayerTwo);
  console.log("adjugé");
})


function validateFormDuo() {
  console.log("ca passe");
  let y = document.forms["formDuo"]["pseudo"].value;
  if (y == "") {
    alert("Veuillez indiquer un pseudo pour jouer!");
    return false;
  }
  else {
    
    console.log(pseudoPlayerTwo);

  console.log(pseudoPlayerTwo);
   window.location = "modeDuo.html";

}}

// function setUserPseudoPlayerTwo() {
  
//   pseudoPlayerTwo = document.getElementById('pseudoPlayerTwo').value;
//   localStorage.setItem('pseudoPlayerTwo', pseudoPlayerTwo);
//   console.log(pseudoPlayerTwo.pseudo);
// }
