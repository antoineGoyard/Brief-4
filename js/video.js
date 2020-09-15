
let player = document.getElementById('player');
let soundOn = document.getElementById('soundOn');
let soundOff = document.getElementById('soundOff');

soundOn.addEventListener('click',()=>{
    player.play()
    player.muted = "true";
    document.getElementById('modale').classList.add('hidden');
});
soundOff.addEventListener('click',()=>{
    player.play();
    document.getElementById('modale').classList.add('hidden');
    
});

// setTimeout(function(){
//   document.getElementById('modale').classList.add('hidden')  
// }, 2000);
// Function Set Time out //

// Quand le vidéo fini , JS Clique automatiquement sure le bouton SKIP.

// function timeOutVideo()
// {
//     document.getElementById('btnSkip').click();
// }

// window.setTimeout(timeOutVideo(), 150000);