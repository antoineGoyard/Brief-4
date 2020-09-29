
    let storedPseudoPlayerOne = localStorage.getItem('pseudoPlayerOne');
    console.log(storedPseudoPlayerOne);
    let storedPseudoPlayerTwo = localStorage.getItem('pseudoPlayerTwo');
    console.log(storedPseudoPlayerTwo);

    let storedMusicOn = localStorage.getItem('musicOn');
    let storedMusicOff = localStorage.getItem('musicOff');
    let storedIconeSon = localStorage.getItem('iconeSon');
    let storedIconeMute = localStorage.getItem('iconeMute');
  
// function getPseudoPlayerOne() {
//     let storedpseudoPlayerOne = localStorage.getItem ('pseudo');
   
//   }
  
storedMusicOn.addEventListener('click',()=>{
  playerAudio.muted = false;
  storedIconeMute.classList.add('hidden');
  storedIconeSon.classList.remove('hidden');
  storedIconeSon.classList.add('sound');
})
storedMusicOff.addEventListener('click',()=>{
  playerAudio.muted = true;
  storedIconeSon.classList.add('hidden');
  storedIconeMute.classList.remove('hidden');
  storedIconeMute.classList.add('sound');
})