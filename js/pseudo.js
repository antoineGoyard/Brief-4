let btnLogin = document.getElementById('btnMenu'); 
let pseudoPlayerTwo = document.getElementById('pseudoPlayerTwo').value;
let score = document.getElementById('score');

btnLogin.addEventListener('click',()=>{
    let pseudoPlayerOne = document.getElementById('pseudoPlayerOne').value;
    console.log("ok");
    validateForm();
    // Afficher la valeur
    console.log(pseudoPlayerOne);
    document.getElementById('PlayerOneDuo').value = pseudoPlayerOne;
});

    
let pseudoPlayerOne = localStorage.setItem('pseudoPlayerOne','');


function validateForm() {
    var x = document.forms["logginForm"]["pseudo"].value;
    if (x == "") {
      alert("Veuillez indiquer un pseudo pour jouer!");
      return false; 
    }
    else {
      sectionMenu.classList.remove('hidden');
        sectionOption.classList.add('hidden');
        sectionScore.classList.add('hidden');
        sectionPseudo.classList.add('hidden');
        //sectionMulti.classList.add('hidden');
        console.log('Click Btn Menu');
    }
  } 