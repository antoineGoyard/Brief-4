let btnMenuVictoireSolo = document.getElementById('btnMenuVictoireSolo');
let btnValidation = document.getElementById('btn_btn1');
let pseudoPlayerOne = localStorage.getItem("pseudoPlayerOne");
let videoExplication = document.getElementById('video');
let sonExplication = document.getElementById('playExplication');
let muteExplication = document.getElementById('mutedExplication');

btnMenuVictoireSolo.addEventListener('click',()=>{
    window.location= "page2.html";
    
})

btnValidation.addEventListener('click',()=>{
    console.log(pseudoPlayerOne);
    
})
sonExplication.addEventListener('click',()=>{
    videoExplication.muted="true";
    sonExplication.classList.add('hidden');
    muteExplication.classList.remove('hidden');
    muteExplication.classList.add('sound');
   
})
muteExplication.addEventListener('click',()=>{
    videoExplication.muted= false;
    muteExplication.classList.add('hidden');
    sonExplication.classList.remove('hidden');
    sonExplication.classList.add('sound');
    
})