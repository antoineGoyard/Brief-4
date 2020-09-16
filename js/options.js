
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
var fullscreen = document.getElementById('fullscreen');
fullscreen.addEventListener('click',()=>{
    openFullscreen();
})
/**
 * Music and sound management
 */
var musicOn = document.getElementById('musicOn');
var musicOff = document.getElementById('musicOff');
var soundOn = document.getElementById('soundOn');
var soundOff = document.getElementById('soundOff');


musicOn.addEventListener('click',()=>{
    playerAudio.muted = false;
    iconeMute.classList.add('hidden');
    iconeSon.classList.remove('hidden');
    iconeSon.classList.add('sound');
})
musicOff.addEventListener('click',()=>{
    playerAudio.muted = true;
    iconeSon.classList.add('hidden');
    iconeMute.classList.remove('hidden');
    iconeMute.classList.add('sound');
})
/* soundOn.addEventListener('click',()=>{
  playerAudio.muted = false;
})
soundOff.addEventListener('click',()=>{
  playerAudio.muted = true;
}) */