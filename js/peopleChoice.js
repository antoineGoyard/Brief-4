
var people = localStorage.getItem("people");

if(people == 'republique')
{
    document.getElementById('boat-1').setAttribute('src', './img/vaisseau1Bleu.png');
    document.getElementById('boat-2').setAttribute('src', './img/vaisseau2Bleu.png');
    document.getElementById('boat-3').setAttribute('src', './img/vaisseau3Bleu.png');
    document.getElementById('boat-4').setAttribute('src', './img/vaisseau3Bleu.png');
    document.getElementById('boat-5').setAttribute('src', './img/vaisseau3Bleu.png');
    console.log('repu');
}
else if(people == 'empire')
{
    document.getElementById('boat-1').setAttribute('src', './img/vaisseau1Rouge.png');
    document.getElementById('boat-2').setAttribute('src', './img/vaisseau2Rouge.png');
    document.getElementById('boat-3').setAttribute('src', './img/vaisseau3Rouge.png');
    document.getElementById('boat-4').setAttribute('src', './img/vaisseau3Rouge.png');
    document.getElementById('boat-5').setAttribute('src', './img/vaisseau3Rouge.png');
    document.getElementById('video').setAttribute('src', './img/explicationempire.mp4');
}
else 
{
    document.getElementById('boat-1').setAttribute('src', './img/vaisseau1Bleu.png');
    document.getElementById('boat-2').setAttribute('src', './img/vaisseau2Bleu.png');
    document.getElementById('boat-3').setAttribute('src', './img/vaisseau3Bleu.png');
    document.getElementById('boat-4').setAttribute('src', './img/vaisseau3Bleu.png');
    document.getElementById('boat-5').setAttribute('src', './img/vaisseau3Bleu.png');
    console.log('else');
}