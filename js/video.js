
let player = document.getElementById('player');
let soundOn = document.getElementById('soundOn');
let soundOff = document.getElementById('soundOff');
let btnSkip = document.getElementById('btnSkip');

soundOn.addEventListener('click',()=>{
    btnSkip.classList.remove('hidden');
    player.play();
    document.getElementById('modale').classList.add('hidden');
    setTimeout(function(){
    console.log("Hello");
    btnSkip.click();
}, 30000);

});

soundOff.addEventListener('click',()=>{
    btnSkip.classList.remove('hidden');
    player.play();
    player.muted = "true";
    document.getElementById('modale').classList.add('hidden');
    setTimeout(function(){
        console.log("Hello");
        btnSkip.click();
    }, 30000);
});


