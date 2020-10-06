//////////////// Function bouton du menu /////////////////

// Variable des sections
let sectionPseudo = document.getElementById('sectionInscription')
let sectionMenu = document.getElementById('sectionMenu');
let sectionSolo = document.getElementById('sectionMenuSolo');
let sectionDuo = document.getElementById('sectionMenuDuo');
let sectionMulti = document.getElementById('sectionMulti');
let sectionScore = document.getElementById('sectionScore');
let sectionOption = document.getElementById('sectionOptions');
let btnMuted = document.getElementById('muted');
let btnPlay = document.getElementById('play');
let btnReturnMenu = document.getElementById('returnMenu');
let btnDuoReturnMenu = document.getElementById('duoReturnMenu');
let btnScoreReturnMenu = document.getElementById('scoreReturnMenu');
let btnMultiReturnMenu = document.getElementById('multiReturnMenu');
let btnJouerSolo = document.getElementById('btnJouerSolo');
let btnJouerDuo = document.getElementById('btnJouerDuo');

// Au click sur la page on cherche l'id de l'element.


addEventListener('click', () =>
{
    //Bouton vers Solo
    if( event.target.id == "btnSolo")
    {
        sectionSolo.classList.remove('hidden')
        sectionMenu.classList.add('hidden');
        console.log('Click Btn Solo');
    }
    //Bouton Vers Duo
    else if( event.target.id == "btnDuo")
    {
        sectionDuo.classList.remove('hidden')
        sectionMenu.classList.add('hidden');
        sectionSolo.classList.add('hidden');
        console.log('Click Btn Duo');
    }
    // Bouton Vers Multi
     else if( event.target.id == "btnMulti")
    {
        sectionMulti.classList.remove('hidden')
        sectionMenu.classList.add('hidden');
        console.log('Click Btn Multi');
    }
    // Bouton Vers Score
     else if( event.target.id == "btnScore")
    {
        sectionScore.classList.remove('hidden')
        sectionMenu.classList.add('hidden');
        console.log('Click Btn Score');
    }
    //Bouton Vers Option
     else if( event.target.id == "btnOptions")
    {
        sectionOption.classList.remove('hidden')
        sectionMenu.classList.add('hidden');
        console.log('Click Btn Option');
    }
    // Bouton vers le Menu
     else if( event.target.id == "btnMenuOptions")
    {
        sectionMenu.classList.remove('hidden');
        sectionOption.classList.add('hidden');
        sectionScore.classList.add('hidden');
        sectionPseudo.classList.add('hidden');
        sectionMulti.classList.add('hidden');
        console.log('Click Btn Menu');
    }
    // Si il y a un clic ailleurs que sur un bouton
    

    // gestion icone son
    if( event.target.id == "btnPlay")
    {
        btnPlay.classList.add('hidden')
        dbtnMuted.classList.remove('hidden')
    }
     else if( event.target.id == "btnMuted")
    {
        btnPlay.classList.remove('hidden')
        dbtnMuted.classList.add('hidden')
    }
})
    //bouton retour menu
 btnReturnMenu.addEventListener('click',()=>{
    sectionMenu.classList.remove('hidden');
    sectionSolo.classList.add('hidden')
    sectionDuo.classList.add('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden')
    sectionMulti.classList.add('hidden');
    console.log('Click Btn retour menu');
 })
 btnDuoReturnMenu.addEventListener('click',()=>{
    sectionMenu.classList.remove('hidden');
    sectionDuo.classList.add('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden')
    sectionMulti.classList.add('hidden');
    console.log('Click Btn retour menu');
 })
 btnScoreReturnMenu.addEventListener('click',()=>{
    sectionMenu.classList.remove('hidden');
    sectionDuo.classList.add('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden')
    sectionMulti.classList.add('hidden');
    console.log('Click Btn retour menu');
 })
btnMultiReturnMenu.addEventListener('click',()=>{
    sectionMenu.classList.remove('hidden');
    sectionDuo.classList.add('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden')
    sectionMulti.classList.add('hidden');
    console.log('Click Btn retour menu');
})
