// Appelle de mes boutons en variables
let btn1 = document.getElementById('btn_btn1');
let btn2 = document.getElementById('btn_btn2');


// Appelle de mes bateaux en variable
let boat1 = document.getElementById('boat-1');
let boat2 = document.getElementById('boat-2');
let boat3 = document.getElementById('boat-3');
let boat4 = document.getElementById('boat-4');
let boat5 = document.getElementById('boat-5');


// Bouton qui permet de tourner les bateaux
btn2.addEventListener('click', () => {


    // J'initialise les src de chaque bateau
    let srcboat1 = boat1.getAttribute("src");
    let srcboat2 = boat2.getAttribute("src");
    let srcboat3 = boat3.getAttribute("src");
    let srcboat4 = boat4.getAttribute("src");
    let srcboat5 = boat5.getAttribute("src");


    // Je vérifie que le bateau ne soit pas déja placer sure la grille
    if (boat1.className === 'draggable bateaunoturn ElementPlacer ') {

    }
    else {

        //Je change l'image , et je mais une image tourner a 90°
        if (srcboat1 == "./img/vaisseau1Bleu.png") {
            srcboat1 = "./img/vaisseau1Bleu90.png";
            boat1.classList.add('boatturn');
            boat1.classList.add('affichageboatturn');
            boat1.classList.remove('bateaunoturn');
        }
        else {
            srcboat1 = "./img/vaisseau1Bleu.png";
            boat1.classList.remove('boatturn');
            boat1.classList.add('bateaunoturn');
            boat1.classList.remove('affichageboatturn');
        };
    }
    boat1.setAttribute("src", srcboat1);



    if (boat2.className === 'draggable bateaunoturn ElementPlacer') {

    }
    else {

        if (srcboat2 == "./img/vaisseau1Rouge.png") {
            srcboat2 = "./img/vaisseau1Rouge90.png";
            boat2.classList.add('boatturn')
            boat2.classList.add('affichageboatturn');
            boat2.classList.remove('bateaunoturn');
        }
        else {
            srcboat2 = "./img/vaisseau1Rouge.png";
            boat2.classList.remove('boatturn');
            boat2.classList.add('bateaunoturn')
            boat2.classList.remove('affichageboatturn');
        };
    }
    boat2.setAttribute("src", srcboat2);



    if (boat3.className === 'draggable bateaunoturn ElementPlacer') {

    }
    else {

        if (srcboat3 == "./img/vaisseau1Bleu.png") {
            srcboat3 = "./img/vaisseau1Bleu90.png";
            boat3.classList.add('boatturn')
            boat3.classList.add('affichageboatturn');
            boat3.classList.remove('bateaunoturn');
        }
        else {
            srcboat3 = "./img/vaisseau1Bleu.png";
            boat3.classList.remove('boatturn');
            boat3.classList.remove('affichageboatturn');
            boat3.classList.add('bateaunoturn')
        };
    }
    boat3.setAttribute("src", srcboat3);



    if (boat4.className === 'draggable bateaunoturn ElementPlacer') {

    }
    else {

        if (srcboat4 == "./img/vaisseau1Rouge.png") {
            srcboat4 = "./img/vaisseau1Rouge90.png";
            boat4.classList.add('boatturn')
            boat4.classList.add('affichageboatturn');
            boat4.classList.remove('bateaunoturn');
        }
        else {
            srcboat4 = "./img/vaisseau1Rouge.png";
            boat4.classList.remove('boatturn');
            boat4.classList.remove('affichageboatturn');
            boat4.classList.add('bateaunoturn');
        };
    }
    boat4.setAttribute("src", srcboat4);



    if (boat5.className === 'draggable bateaunoturn ElementPlacer') {

    }
    else {

        if (srcboat5 == "./img/vaisseau1Bleu.png") {
            srcboat5 = "./img/vaisseau1Bleu90.png";
            boat5.classList.add('boatturn')
            boat5.classList.add('affichageboatturn');
            boat5.classList.remove('bateaunoturn');
        }
        else {
            srcboat5 = "./img/vaisseau1Bleu.png";
            boat5.classList.remove('boatturn');
            boat5.classList.remove('affichageboatturn');
            boat5.classList.add('bateaunoturn');
        };
    }
    boat5.setAttribute("src", srcboat5);


});


// Création des tableaux de jeux.
// Le premier tableau sers a récupérer l'id

let varaible1 = 0

for (let u = 0; u < 1; u++) {
    let newItemNew = document.createElement('table');
    let letableau = 'letableau';
    newItemNew.id = (letableau);
    document.getElementById('game_board_main').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) {
        let newItem = document.createElement('tr');
        newItem.classList.add('uneLigne');
        let ligneID = 'uneLigne' + i;
        newItem.id = (ligneID);
        document.getElementById('letableau').appendChild(newItem);


        for (let x = 0; x < 10; x++) {

            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecase');
            itemNew.id = (varaible1);
            itemNew.classList.add('player');
            itemNew.classList.add('droppable');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible1++
        }
    }
}
// Tableau de placement des bateaux
let varaible10 = 1000

for (let u = 0; u < 1; u++) {
    let newItemNew = document.createElement('table');
    let letableau = 'letableauvisible';
    newItemNew.id = (letableau);
    document.getElementById('game_board_main2').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) {
        let newItem = document.createElement('tr');
        newItem.classList.add('uneLigne');
        let ligneID = 'uneLigneinvisible' + i;
        newItem.id = (ligneID);
        document.getElementById('letableauvisible').appendChild(newItem);


        for (let x = 0; x < 10; x++) {

            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecaseinvisible');
            itemNew.id = (varaible10);
            itemNew.classList.add('player');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible10++
        }
    }
}
// Tableau qui servira pour trouver les bateauc de l'ia
let varaible100 = 3000

for (let u = 0; u < 1; u++) {
    let newItemia = document.createElement('table');
    let letableauia = 'letableauia';
    newItemia.id = (letableauia);
    document.getElementById('game_board_ia').appendChild(newItemia);
    document.getElementById('game_board_ia').classList.add('hidden');

    for (let i = 0; i < 10; i++) {
        let newItemia = document.createElement('tr');
        newItemia.classList.add('uneLigneia');
        let ligneID = 'uneLigneia' + i;
        newItemia.id = (ligneID);
        document.getElementById('letableauia').appendChild(newItemia);


        for (let x = 0; x < 10; x++) {

            let itemNewia = document.createElement('td');
            itemNewia.classList.add('battlecaseIA');
            itemNewia.id = (varaible100);
            document.getElementById(ligneID).appendChild(itemNewia);
            varaible100++
        }
    }
}


let nmbdraggable = 0;

// Clique sure la validations de placement
// Ajouts dans les tableaus des coordonées de chaques bateaux + Vérification que les bateaux soit bien placer
// Reste à ajouter la vérification que deux bateaux ne soit pas sure la meme case

btn1.addEventListener('click', () => {

    //Initialisation de mes fontions.
    addTabBoat1();
    addTabBoat2();
    addTabBoat3();
    addTabBoat4();
    addTabBoat5();
    malplacement = 0;

    //Vérification des placements pour chaque tableau de bateau.

    for (let i = 0; i < positionBateau1.length; i++) {
        if (positionBateau1[i] >= 100 || (positionBateau1[i] == 9 && positionBateau1[i + 1] == 10) || (positionBateau1[i] == 19 && positionBateau1[i + 1] == 20) || (positionBateau1[i] == 29 && positionBateau1[i + 1] == 30) || (positionBateau1[i] == 39 && positionBateau1[i + 1] == 40) || (positionBateau1[i] == 49 && positionBateau1[i + 1] == 50) || (positionBateau1[i] == 59 && positionBateau1[i + 1] == 60) || (positionBateau1[i] == 69 && positionBateau1[i + 1] == 70) || (positionBateau1[i] == 79 && positionBateau1[i + 1] == 80) || (positionBateau1[i] == 89 && positionBateau1[i + 1] == 90)) {
            console.log('bat1 au dessu de 100');
            positionBat1 = positionBateau1[0];
            boat1PlaceDown = document.getElementById('boat-1');
            document.getElementById('2000').appendChild(boat1PlaceDown);
            document.getElementById('boat-1').classList.remove('ElementPlacer');
            boat1 = document.getElementById('boat-1');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau2.length; i++) {
        if (positionBateau2[i] >= 100 || (positionBateau2[i] == 9 && positionBateau2[i + 1] == 10) || (positionBateau2[i] == 19 && positionBateau2[i + 1] == 20) || (positionBateau2[i] == 29 && positionBateau2[i + 1] == 30) || (positionBateau2[i] == 39 && positionBateau2[i + 1] == 40) || (positionBateau2[i] == 49 && positionBateau2[i + 1] == 50) || (positionBateau2[i] == 59 && positionBateau2[i + 1] == 60) || (positionBateau2[i] == 69 && positionBateau2[i + 1] == 70) || (positionBateau2[i] == 79 && positionBateau2[i + 1] == 80) || (positionBateau2[i] == 89 && positionBateau2[i + 1] == 90)) {
            console.log('bat1 au dessu de 100');
            positionBat2 = positionBateau2[0];
            boat2PlaceDown = document.getElementById('boat-2');
            document.getElementById('2001').appendChild(boat2PlaceDown);
            document.getElementById('boat-2').classList.remove('ElementPlacer');
            boat2 = document.getElementById('boat-2');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau3.length; i++) {
        if (positionBateau3[i] >= 100 || (positionBateau3[i] == 9 && positionBateau3[i + 1] == 10) || (positionBateau3[i] == 19 && positionBateau3[i + 1] == 20) || (positionBateau3[i] == 29 && positionBateau3[i + 1] == 30) || (positionBateau3[i] == 39 && positionBateau3[i + 1] == 40) || (positionBateau3[i] == 49 && positionBateau3[i + 1] == 50) || (positionBateau3[i] == 59 && positionBateau3[i + 1] == 60) || (positionBateau3[i] == 69 && positionBateau3[i + 1] == 70) || (positionBateau3[i] == 79 && positionBateau3[i + 1] == 80) || (positionBateau3[i] == 89 && positionBateau3[i + 1] == 90)) {
            positionBat3 = positionBateau3[0];
            boat3PlaceDown = document.getElementById('boat-3');
            document.getElementById('2002').appendChild(boat3PlaceDown);
            document.getElementById('boat-3').classList.remove('ElementPlacer');
            boat3 = document.getElementById('boat-3');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-3').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau4.length; i++) {
        if (positionBateau4[i] >= 100 || (positionBateau4[i] == 9 && positionBateau4[i + 1] == 10) || (positionBateau4[i] == 19 && positionBateau4[i + 1] == 20) || (positionBateau4[i] == 29 && positionBateau4[i + 1] == 30) || (positionBateau4[i] == 39 && positionBateau4[i + 1] == 40) || (positionBateau4[i] == 49 && positionBateau4[i + 1] == 50) || (positionBateau4[i] == 59 && positionBateau4[i + 1] == 60) || (positionBateau4[i] == 69 && positionBateau4[i + 1] == 70) || (positionBateau4[i] == 79 && positionBateau4[i + 1] == 80) || (positionBateau4[i] == 89 && positionBateau4[i + 1] == 90)) {
            positionBat4 = positionBateau4[0];
            boat4PlaceDown = document.getElementById('boat-4');
            document.getElementById('2003').appendChild(boat4PlaceDown);
            document.getElementById('boat-4').classList.remove('ElementPlacer');
            boat4 = document.getElementById('boat-4');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-4').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau5.length; i++) {
        if (positionBateau5[i] >= 100 || (positionBateau5[i] == 9 && positionBateau5[i + 1] == 10) || (positionBateau5[i] == 19 && positionBateau5[i + 1] == 20) || (positionBateau5[i] == 29 && positionBateau5[i + 1] == 30) || (positionBateau5[i] == 39 && positionBateau5[i + 1] == 40) || (positionBateau5[i] == 49 && positionBateau5[i + 1] == 50) || (positionBateau5[i] == 59 && positionBateau5[i + 1] == 60) || (positionBateau5[i] == 69 && positionBateau5[i + 1] == 70) || (positionBateau5[i] == 79 && positionBateau5[i + 1] == 80) || (positionBateau5[i] == 89 && positionBateau5[i + 1] == 90)) {
            positionBat5 = positionBateau5[0];
            boat5PlaceDown = document.getElementById('boat-5');
            document.getElementById('2004').appendChild(boat5PlaceDown);
            document.getElementById('boat-5').classList.remove('ElementPlacer');
            boat5 = document.getElementById('boat-5');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-5').classList.remove('malplacer');
        }

    }
    for (let i = 0; i < positionBateau1.length; i++) {
        for (let u = 0; u < positionBateau2.length; u++) {
            for (let t = 0; t < positionBateau3.length; t++) {
                for (let o = 0; o < positionBateau4.length; o++) {
                    for (let m = 0; m < positionBateau5.length; m++) {
                        if (positionBateau1[i] == positionBateau2[u] || positionBateau1[i] == positionBateau3[t] || positionBateau1[i] == positionBateau4[o] || positionBateau1[i] == positionBateau5[m] || positionBateau2[u] == positionBateau3[t] || positionBateau2[u] == positionBateau4[o] || positionBateau2[u] == positionBateau5[m] || positionBateau3[t] == positionBateau4[o] || positionBateau3[t] == positionBateau5[m] || positionBateau4[o] == positionBateau5[m]) {
                            malplacement++;
                            console.log(malplacement);
                            console.log('probleme');
                        }
                    }
                }
            }
        }
    }

    //console.log(bat1)
    boatPlayer = [positionBateau1, positionBateau2, positionBateau3, positionBateau4, positionBateau5];
    console.log(boatPlayer);


    if (malplacement >= 1) {
        alert('Un ou des bateaux son mal placé !')
    }
    // Si tous est bien placer , j'enleve les élements inutiles , j'affiche le nouveau tableau pour l'ia. 
    else {
        placement = document.getElementById('placementGeneral');
        placement.classList.add('placementGame2');
        placement.classList.remove('placementGame');
        document.getElementById('btn_btn2').classList.add('hidden');
        document.getElementById('btn_btn1').classList.add('hidden');
        document.getElementById('game_board_ia').classList.remove('hidden');
        document.getElementById('nomovegame').classList.remove('hidden');
        document.getElementById('explicationGame').classList.add('hidden');
        document.getElementById('bateauplacer').classList.add('hidden');
        document.getElementById('bateauplacer').classList.remove('passagevertical');
        document.getElementById('title_game').classList.remove('hidden');
        document.getElementById('title_game_player').classList.add('hidden');
        document.getElementById('letableau').classList.add('changementplace');
        document.getElementById('letableauvisible').classList.add('changementplace');
        document.getElementById('boat-1').classList.add('passagesmallboat-1');
        document.getElementById('boat-2').classList.add('passagesmallboat-2');
        document.getElementById('boat-3').classList.add('passagesmallboat-3');
        document.getElementById('boat-4').classList.add('passagesmallboat-4');
        document.getElementById('boat-5').classList.add('passagesmallboat-5');
        document.getElementById('placementGeneral').classList.add('placementGridSmall');
        gameLvl0();
    }
})

var boat = new Array;
var boatPlayer = new Array;

// Ecriture dans les tableaus , pour chaque bateaux .

function addTabBoat1() {
    if (document.getElementById('boat-1').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-1').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;
        let position4 = position3 + 1;
        let position5 = position4 + 1;

        positionBateau1 = [position1, position2, position3, position4, position5];

        console.log(positionBateau1);
    }
    else {
        var bateau1 = document.getElementById('boat-1').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;
        let position4 = position3 + 10;
        let position5 = position4 + 10;

        positionBateau1 = [position1, position2, position3, position4, position5];

    }



    //console.log(bat1);

}
function addTabBoat2() {
    if (document.getElementById('boat-2').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-2').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;
        let position4 = position3 + 1;

        positionBateau2 = [position1, position2, position3, position4];

        console.log(positionBateau2);
    }
    else {
        var bateau1 = document.getElementById('boat-2').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;
        let position4 = position3 + 10;

        positionBateau2 = [position1, position2, position3, position4];

    }

}
function addTabBoat3() {
    if (document.getElementById('boat-3').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-3').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;

        positionBateau3 = [position1, position2, position3];

        console.log(positionBateau3);
    }
    else {
        var bateau1 = document.getElementById('boat-3').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;

        positionBateau3 = [position1, position2, position3];

    }

}
function addTabBoat4() {

    if (document.getElementById('boat-4').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-4').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;

        positionBateau4 = [position1, position2, position3];

        console.log(positionBateau4);
    }
    else {
        var bateau1 = document.getElementById('boat-4').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;

        positionBateau4 = [position1, position2, position3];

    }

}
function addTabBoat5() {
    if (document.getElementById('boat-5').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-5').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 1;

        positionBateau5 = [position1, position2];

        console.log(positionBateau5);
    }
    else {
        var bateau1 = document.getElementById('boat-5').parentNode.id;
        let position1 = bateau1 - 1000;
        let position2 = position1 + 10;

        positionBateau5 = [position1, position2];

    }

}

//console.log(bat1)


// Fonction drag and drop ( Cour openClassRoom )

(function () {

    var dndHandler = {

        draggedElement: null, // Propriété pointant vers l'élément en cours de déplacement

        applyDragEvents: function (element) {

            element.draggable = true;

            var dndHandler = this; // Cette variable est nécessaire pour que l'événement « dragstart » ci-dessous accède facilement au namespace « dndHandler »

            element.addEventListener('dragstart', function (e) {
                dndHandler.draggedElement = e.target; // On sauvegarde l'élément en cours de déplacement
                e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
            });

        },

        applyDropEvents: function (dropper) {

            dropper.addEventListener('dragover', function (e) {
                e.preventDefault(); // On autorise le drop d'éléments
                this.className = 'dropper drop_hover'; // Et on applique le style adéquat à notre zone de drop quand un élément la survole
            });

            dropper.addEventListener('dragleave', function () {
                this.className = 'dropper'; // On revient au style de base lorsque l'élément quitte la zone de drop
            });

            var dndHandler = this; // Cette variable est nécessaire pour que l'événement « drop » ci-dessous accède facilement au namespace « dndHandler »

            dropper.addEventListener('drop', function (e) {

                var target = e.target,
                    draggedElement = dndHandler.draggedElement, // Récupération de l'élément concerné
                    clonedElement = draggedElement.cloneNode(true);
                clonedElement.classList.add('ElementPlacer');
                clonedElement.classList.remove('affichageboatturn'); // On créé immédiatement le clone de cet élément

                while (target.className.indexOf('dropper') == -1) { // Cette boucle permet de remonter jusqu'à la zone de drop parente
                    target = target.parentNode;
                }

                target.className = 'dropper'; // Application du style par défaut

                clonedElement = target.appendChild(clonedElement); // Ajout de l'élément cloné à la zone de drop actuelle
                dndHandler.applyDragEvents(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()

                draggedElement.parentNode.removeChild(draggedElement); // Suppression de l'élément d'origine

            });

        }

    };

    var elements = document.querySelectorAll('.draggable'),
        elementsLen = elements.length;

    for (var i = 0; i < elementsLen; i++) {
        dndHandler.applyDragEvents(elements[i]); // Application des paramètres nécessaires aux éléments déplaçables
    }

    var droppers = document.querySelectorAll('.dropper'),
        droppersLen = droppers.length;

    for (var i = 0; i < droppersLen; i++) {
        dndHandler.applyDropEvents(droppers[i]); // Application des événements nécessaires aux zones de drop
    }

})();


var vid = document.getElementById("video");
function removeControls(video) {
    video.removeAttribute('controls');
}
window.onload = removeControls(video);


// récupérer l'id du coup du joueur 




// Initialitation bateau AI.
var bateau1 = [];
var bateau2 = [];
var bateau3 = [];
var bateau4 = [];
var bateau5 = [];
let boatAi = new Array;




let direction1 = Math.floor(Math.random() * 2);
let direction2 = Math.floor(Math.random() * 2);
let direction3 = Math.floor(Math.random() * 2);
let direction4 = Math.floor(Math.random() * 2);
let direction5 = Math.floor(Math.random() * 2);

//console.log(direction1);
//console.log(direction2);
////console.log(direction3);
//console.log(direction4);
//console.log(direction5);

function bateau1Ai() {

    if (direction1 == 0) {
      //  console.log('direction 0');
        let position1Ia = Math.floor(Math.random() * 100);
        position2Ia = position1Ia + 1;
        position3Ia = position2Ia + 1;
        position4Ia = position3Ia + 1;
        position5Ia = position4Ia + 1;


        bateau1 = [position1Ia, position2Ia, position3Ia, position4Ia, position5Ia];
        
    }
    else if (direction1 >= 1) {

       // console.log('direction 1');
        let position1Ia = Math.floor(Math.random() * 60);
        position2Ia = position1Ia + 10;
        position3Ia = position2Ia + 10;
        position4Ia = position3Ia + 10;
        position5Ia = position4Ia + 10;

        bateau1 = [position1Ia, position2Ia, position3Ia, position4Ia, position5Ia];
    }

    for (let i = 0; i < bateau1.length; i++) {

        if (bateau1[i] >= 100 || (bateau1[i] == 9 && bateau1[i + 1] == 10) || (bateau1[i] == 19 && bateau1[i + 1] == 20) || (bateau1[i] == 29 && bateau1[i + 1] == 30) || (bateau1[i] == 39 && bateau1[i + 1] == 40) || (bateau1[i] == 49 && bateau1[i + 1] == 50) || (bateau1[i] == 59 && bateau1[i + 1] == 60) || (bateau1[i] == 69 && bateau1[i + 1] == 70) || (bateau1[i] == 79 && bateau1[i + 1] == 80) || (bateau1[i] == 89 && bateau1[i + 1] == 90)) {

            bateau1Ai();
        }
        else {
        }
    }
}
function bateau2Ai() {
    if (direction2 == 0) {
       // console.log('direction 0');
        let position1Ia = Math.floor(Math.random() * 100);
        position2Ia = position1Ia + 1;
        position3Ia = position2Ia + 1;
        position4Ia = position3Ia + 1;



        bateau2 = [position1Ia, position2Ia, position3Ia, position4Ia];
    }
    else if (direction2 >= 1) {

       // console.log('direction 1');
        let position1Ia = Math.floor(Math.random() * 60);
        position2Ia = position1Ia + 10;
        position3Ia = position2Ia + 10;
        position4Ia = position3Ia + 10;


        bateau2 = [position1Ia, position2Ia, position3Ia, position4Ia];
    }

   for (let i = 0; i < bateau2.length; i++) {

        if (bateau2[i] >= 100 || (bateau2[i] == 9 && bateau2[i + 1] == 10) || (bateau2[i] == 19 && bateau2[i + 1] == 20) || (bateau2[i] == 29 && bateau2[i + 1] == 30) || (bateau2[i] == 39 && bateau2[i + 1] == 40) || (bateau2[i] == 49 && bateau2[i + 1] == 50) || (bateau2[i] == 59 && bateau2[i + 1] == 60) || (bateau2[i] == 69 && bateau2[i + 1] == 70) || (bateau2[i] == 79 && bateau2[i + 1] == 80) || (bateau2[i] == 89 && bateau2[i + 1] == 90)) {

            bateau2Ai();
        }
        else {
        }
    }
}
function bateau3Ai() {

    if (direction3 == 0) {
       // console.log('direction 0');
        let position1Ia = Math.floor(Math.random() * 100);
        position2Ia = position1Ia + 1;
        position3Ia = position2Ia + 1;


        bateau3 = [position1Ia, position2Ia, position3Ia];
    }
    else if (direction3 >= 1) {

       // console.log('direction 1');
        let position1Ia = Math.floor(Math.random() * 60);
        position2Ia = position1Ia + 10;
        position3Ia = position2Ia + 10;

        bateau3 = [position1Ia, position2Ia, position3Ia];
    }

    for (let i = 0; i < bateau3.length; i++) {

        if (bateau3[i] >= 100 || (bateau3[i] == 9 && bateau3[i + 1] == 10) || (bateau3[i] == 19 && bateau3[i + 1] == 20) || (bateau3[i] == 29 && bateau3[i + 1] == 30) || (bateau3[i] == 39 && bateau3[i + 1] == 40) || (bateau3[i] == 49 && bateau3[i + 1] == 50) || (bateau3[i] == 59 && bateau3[i + 1] == 60) || (bateau3[i] == 69 && bateau3[i + 1] == 70) || (bateau3[i] == 79 && bateau3[i + 1] == 80) || (bateau3[i] == 89 && bateau3[i + 1] == 90)) {

            bateau3Ai();
        }
        else {
        }
    }
}

function bateau4Ai() {



    if (direction4 == 0) {
       // console.log('direction 0');
        let position1Ia = Math.floor(Math.random() * 100);
        position2Ia = position1Ia + 1;
        position3Ia = position2Ia + 1;


        bateau4 = [position1Ia, position2Ia, position3Ia];
    }
    else if (direction4 >= 1) {

       // console.log('direction 1');
        let position1Ia = Math.floor(Math.random() * 60);
        position2Ia = position1Ia + 10;
        position3Ia = position2Ia + 10;

        bateau4 = [position1Ia, position2Ia, position3Ia];
    }
    for (let i = 0; i < bateau4.length; i++) {

        if (bateau4[i] >= 100 || (bateau4[i] == 9 && bateau4[i + 1] == 10) || (bateau4[i] == 19 && bateau4[i + 1] == 20) || (bateau4[i] == 29 && bateau4[i + 1] == 30) || (bateau4[i] == 39 && bateau4[i + 1] == 40) || (bateau4[i] == 49 && bateau4[i + 1] == 50) || (bateau4[i] == 59 && bateau4[i + 1] == 60) || (bateau4[i] == 69 && bateau4[i + 1] == 70) || (bateau4[i] == 79 && bateau4[i + 1] == 80) || (bateau4[i] == 89 && bateau4[i + 1] == 90)) {

            bateau4Ai();
        }
        else {
        }
    }
}

function bateau5Ai() {


    if (direction5 == 0) {
       // console.log('direction 0');
        let position1Ia = Math.floor(Math.random() * 100);
        position2Ia = position1Ia + 1;


        bateau5 = [position1Ia, position2Ia];




    }
    else if (direction5 >= 1) {

       // console.log('direction 1');
        let position1Ia = Math.floor(Math.random() * 60);
        position2Ia = position1Ia + 10;

        bateau5 = [position1Ia, position2Ia];

    }
    for (let i = 0; i < bateau5.length; i++) {

        if (bateau5[i] >= 100 || (bateau5[i] == 9 && bateau5[i + 1] == 10) || (bateau5[i] == 19 && bateau5[i + 1] == 20) || (bateau5[i] == 29 && bateau5[i + 1] == 30) || (bateau5[i] == 39 && bateau5[i + 1] == 40) || (bateau5[i] == 49 && bateau5[i + 1] == 50) || (bateau5[i] == 59 && bateau5[i + 1] == 60) || (bateau5[i] == 69 && bateau5[i + 1] == 70) || (bateau5[i] == 79 && bateau5[i + 1] == 80) || (bateau5[i] == 89 && bateau5[i + 1] == 90)) {

            bateau5Ai();
        }
        else {
        }
    }
}

bateau1Ai();
bateau2Ai();
bateau3Ai();
bateau4Ai();
bateau5Ai();



for (let i = 0; i < bateau1.length; i++) {
    for (let u = 0; u < bateau2.length; u++) {
        for (let t = 0; t < bateau3.length; t++) {
            for (let o = 0; o < bateau4.length; o++) {
                for (let m = 0; m < bateau5.length; m++) {
                    if (bateau1[i] == bateau2[u] || bateau1[i] == bateau3[t] || bateau1[i] == bateau4[o] || bateau1[i] == bateau5[m]) {

                        bateau1Ai();
                        i = 0;

                    }
                    else if(bateau2[u] == bateau3[t] || bateau2[u] == bateau4[o] || bateau2[u] == bateau5[m])
                    {
                        bateau2Ai();
                        u = 0;
                    }
                    else if(bateau3[t] == bateau4[o] || bateau3[t] == bateau5[m])
                    {
                        bateau3Ai();
                        t = 0;
                    }
                    else if(bateau4[o] == bateau5[m])
                    {
                        bateau4Ai();
                        o = 0;
                    }
                }
            }
        }
    }
}


boatAi = [bateau1, bateau2, bateau3, bateau4, bateau5];
console.log(boatAi);
