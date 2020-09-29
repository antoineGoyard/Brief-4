let iconeSon = document.getElementById('play');
localStorage.setItem('iconeSon', iconeSon);
let iconeMute = document.getElementById('muted');
localStorage.setItem('iconeMute', iconeMute);
let playerAudio = document.getElementById('audioAccueil');
localStorage.setItem('playerAudio', playerAudio);

iconeSon.addEventListener('click',()=>{
    iconeSon.classList.add('hidden');
    iconeMute.classList.remove('hidden');
    iconeMute.classList.add('sound');
})
iconeMute.addEventListener('click',()=>{
    iconeMute.classList.add('hidden');
    iconeSon.classList.remove('hidden');
    iconeSon.classList.add('sound');
})
iconeSon.addEventListener('click',()=>{
    playerAudio.muted = true;
})
iconeMute.addEventListener('click',()=>{
    playerAudio.muted = false;
})