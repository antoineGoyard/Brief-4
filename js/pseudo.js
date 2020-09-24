let btnLogin = document.getElementById('btnMenu'); 
let pseudoPlayerTwo = document.getElementById('pseudoPlayerTwo').value;
let score = document.getElementById('score');
localStorage.setItem('pseudo', pseudoPlayerTwo);

btnLogin.addEventListener('click',()=>{
    let pseudoPlayerOne = document.getElementById('pseudoPlayerOne').value;
    // Afficher la valeur
    console.log(pseudoPlayerOne);
    document.getElementById('PlayerOneDuo').value = pseudoPlayerOne;
});

    
let storedName = localStorage.getItem('pseudo');