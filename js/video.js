
let player = document.getElementById('player');
let soundOn = document.getElementById('soundOn');
let soundOff = document.getElementById('soundOff');

soundOn.addEventListener('click',()=>{
    player.play()
    document.getElementById('modale').classList.add('hidden');
    setTimeout(function(){
    console.log("Hello");
    document.getElementById('btnSkip').click();
}, 8000);

});

soundOff.addEventListener('click',()=>{
    player.play();
    player.muted = "true";
    document.getElementById('modale').classList.add('hidden');
    setTimeout(function(){
        console.log("Hello");
        document.getElementById('btnSkip').click();
    }, 8000);
});


