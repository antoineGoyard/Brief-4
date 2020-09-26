let btnMenuVictoireSolo = document.getElementById('btnMenuVictoireSolo');
let btnValidation = document.getElementById('btn_btn1');
let pseudoPlayerOne = localStorage.getItem("pseudoPlayerOne");

btnMenuVictoireSolo.addEventListener('click',()=>{
    window.location= "page2.html";
    
})

btnValidation.addEventListener('click',()=>{
    console.log(pseudoPlayerOne);
})