let btnLogin = document.getElementById('btnMenu');
let score = document.getElementById('score');
let pseudoPlayerOne = document.getElementById('pseudoInscription').value;

function setUserPseudoPlayerOne() {
  pseudoPlayerOne = localStorage.setItem('pseudo', pseudoPlayerOne);
  console.log("test local");
}

btnLogin.addEventListener('click', () => {
  console.log("ok");
  validateForm();
  setUserPseudoPlayerOne();
  console.log("taratata");

});

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
  validateInput();
  console.log('Click Btn Jouer Duo');
})


function validateInput() {
  console.log("ca passe");
  let pseudoPlayerTwo = document.forms["formDuo"]["pseudo2"].value;
  
  if (pseudoPlayerTwo == "") {
    alert("Veuillez indiquer un pseudo pour jouer!");
    return false;
  }
  else {
    setUserPseudoPlayerTwo();
    console.log(pseudoPlayerTwo);
   window.location = "modeDuo.html";

}}

function setUserPseudoPlayerTwo() {
  pseudoPlayerTwo = localStorage.setItem('pseudo', pseudoPlayerTwo);
  
  console.log(pseudoPlayerTwo.pseudo);
}
