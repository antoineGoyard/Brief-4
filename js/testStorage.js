
    let storedPseudoPlayerOne = localStorage.getItem('pseudoPlayerOne');
    console.log(storedPseudoPlayerOne);
    let storedPseudoPlayerTwo = localStorage.getItem('pseudoPlayerTwo');
    console.log(storedPseudoPlayerTwo);

    let storedMusicOn = localStorage.getItem('musicOn');
    let storedMusicOff = localStorage.getItem('musicOff');
    let storedIconeSon = localStorage.getItem('iconeSon');
    let storedIconeMute = localStorage.getItem('iconeMute');
    let storedPlayerAudio = localStorage.getItem('playerAudio');
   
    let playerAudioGame = storedPlayerAudio;
    let iconeSonGame = document.getElementById('play');
    let iconeMuteGame = document.getElementById('muted');



iconeSonGame.addEventListener('click',()=>{
  iconeMuteGame.classList.remove('hidden');
  iconeMuteGame.classList.add('sound');
  iconeSonGame.classList.add('hidden');

})
  iconeMuteGame.addEventListener('click',()=>{
  iconeSonGame.classList.remove('hidden');
  iconeSonGame.classList.add('sound');
  iconeMuteGame.classList.add('hidden');
})
iconeSon.addEventListener('click',()=>{
  storedPlayerAudio.muted = true;
})
iconeMute.addEventListener('click',()=>{
  storedPlayerAudio.muted = false;
})