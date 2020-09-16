

//////////////// Function skip video /////////////////

// Function Set Time out //

// Quand le vidéo fini , JS Clique automatiquement sure le bouton SKIP.

/*function timeOutVideo()
{
    document.getElementById('IDBOUTONSKIP').click();
}

window.setTimeout(timeOutVideo(), DUREEVIDEO);*/

// Clique bouton a faire en html //


//////////////// Function bouton du menu /////////////////
// Variable des boutons

/*let btnSolo = document.getElementById('');
let btnDuo = document.getElementById('');
let btnMulti = document.getElementById('');
let btnScore = document.getElementById('');
let btnOption = document.getElementById('');*/

// Variable des sections
let sectionPseudo = document.getElementById('sectionInscription')
let sectionMenu = document.getElementById('sectionMenu');
let sectionSolo = document.getElementById('sectionMenuSolo');
let sectionDuo = document.getElementById('sectionMenuDuo');
//let sectionMulti = document.getElementById('');
let sectionScore = document.getElementById('sectionScore');
let sectionOption = document.getElementById('sectionOptions');
let btnMuted = document.getElementById('muted');
let btnPlay = document.getElementById('play');
let btnReturnMenu = document.getElementById('returnMenu');
let btnDuoReturnMenu = document.getElementById('duoReturnMenu');
let btnScoreReturnMenu = document.getElementById('scoreReturnMenu');

// Au click sur la page on cherche l'id de l'element.


addEventListener('click', (event) =>
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
     else if( event.target.id == "btnMenu")
    {
        sectionMenu.classList.remove('hidden');
        sectionOption.classList.add('hidden');
        sectionScore.classList.add('hidden');
        sectionPseudo.classList.add('hidden')
        //sectionMulti.classList.add('hidden');
        console.log('Click Btn Option');
    }
    else if( event.target.id == "btnPlay")
    {
        btnPlay.classList.add('hidden')
        dbtnMuted.classList.remove('hidden')
    }
     else if( event.target.id == "btnMuted")
    {
        btnPlay.classList.remove('hidden')
        dbtnMuted.classList.add('hidden')
    }
    // Si il y a un clique ailleur que sure un bouton
    else
    {
        console.log('Pas sure un bouton');
    }
})

 btnReturnMenu.addEventListener('click',()=>{
    sectionMenu.classList.remove('hidden');
    sectionDuo.classList.add('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden')
    //sectionMulti.classList.add('hidden');
    console.log('Click Btn Option');
 })
 btnDuoReturnMenu.addEventListener('click',()=>{
    sectionMenu.classList.remove('hidden');
    sectionDuo.classList.add('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden')
    //sectionMulti.classList.add('hidden');
    console.log('Click Btn Option');
 })
 btnScoreReturnMenu.addEventListener('click',()=>{
    sectionMenu.classList.remove('hidden');
    sectionDuo.classList.add('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden')
    //sectionMulti.classList.add('hidden');
    console.log('Click Btn Option');
 })