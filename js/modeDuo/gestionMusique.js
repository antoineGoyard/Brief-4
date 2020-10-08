let validationPlayerOne = document.getElementById('btn_btn1P1');
let validationPlayerTwo = document.getElementById('btn_btn1P2');
let videoRepublique =document.getElementById('videoRepublique');
let videoEmpire = document.getElementById('videoEmpire');
let audioGame2 = document.getElementById('audioGame2');
let iconeMusiqueGameDuo  = document.getElementById('gestionMusiqueDuo');
let playMusicGameDuo = document.getElementById('playMusicGameDuo');
let mutedMusicGameDuo = document.getElementById('mutedMusicGameDuo');

validationPlayerOne.addEventListener('click',()=>{
    videoRepublique.muted=true;
    videoEmpire.play();
})
validationPlayerTwo.addEventListener('click',()=>{
    videoEmpire.muted=true;
    audioGame2.play();
    iconeMusiqueGameDuo.classList.remove('hidden');
})
mutedMusicGameDuo.addEventListener('click',()=>{
    audioGame2.muted=false;
    playMusicGameDuo.classList.remove('hidden');
    playMusicGameDuo.classList.add('sound');
    mutedMusicGameDuo.classList.add('hidden');
})
playMusicGameDuo.addEventListener('click',()=>{
    playMusicGameDuo.classList.add('hidden');
    mutedMusicGameDuo.classList.remove('hidden');
    mutedMusicGameDuo.classList.add('sound');
    audioGame2.muted=true;
})