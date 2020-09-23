let btnLogin = document.getElementById('btnMenu'); 
let pseudoPlayerTwo = document.getElementById('pseudoPlayerTwo').value;


btnLogin.addEventListener('click',()=>{
    let pseudoPlayerOne = document.getElementById('pseudoPlayerOne').value;
    // Afficher la valeur
    console.log(pseudoPlayerOne);
    document.getElementById('PlayerOneDuo').value = pseudoPlayerOne;
});

