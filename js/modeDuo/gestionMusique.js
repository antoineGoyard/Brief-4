let validationPlayerOne = document.getElementById('btn_btn1P1');
let videoRepublique =document.getElementById('videoRepublique');
let videoEmpire = document.getElementById('videoEmpire');

validationPlayerOne.addEventListener('click',()=>{
    videoRepublique.muted=true;
    videoEmpire.play();
})