// Appelle de mes boutons en variables
let btn1 = document.getElementById('btn_btn1');
let btn2 = document.getElementById('btn_btn2');


// Appelle de mes bateaux en variable
let boat1 = document.getElementById('boat-1');
let boat2 = document.getElementById('boat-2');
let boat3 = document.getElementById('boat-3');
let boat4 = document.getElementById('boat-4');
let boat5 = document.getElementById('boat-5');


var difficult1 = localStorage.getItem("difficult");
var people = localStorage.getItem("people");
//console.log(difficult1);
//console.log(people);


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