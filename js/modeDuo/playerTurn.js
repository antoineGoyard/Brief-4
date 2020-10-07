var affichageBoardGame = 0;
var bouton_board_yes = document.getElementById('visual_board');
var bouton_board_no = document.getElementById('no_visual_board');
var btnGoP1 = document.getElementById('btn_gamep1');
var btnGoP2 = document.getElementById('btn_gamep2');

var touchPlayer = [];
var boatPlayer2 = new Array;



let PseudoPlayerOne = localStorage.getItem('pseudoPlayerOne');
console.log(PseudoPlayerOne);
let PseudoPlayerTwo = localStorage.getItem('pseudoPlayerTwo');
console.log(PseudoPlayerTwo);

var player1 = PseudoPlayerOne;
var player2 = PseudoPlayerTwo;

document.getElementById('namePlayer1').append(player1);
document.getElementById('namePlayer11').append(player1);
document.getElementById('namePlayer13').append(player1);

document.getElementById('namePlayer2').append(player2);
document.getElementById('namePlayer22').append(player2);
document.getElementById('namePlayer23').append(player2);

//for( x = 0 ; x <= )

bouton_board_yes.addEventListener('click', () => {
    document.getElementById('section_go').classList.add('hidden');
    affichageBoardGame = 1;
    document.getElementById('title_player1').classList.remove('hidden');
    console.log(affichageBoardGame);
})



btnGoP1.addEventListener('click', () => {
    document.getElementById('title_player1').classList.add('hidden');
    document.getElementById('section_hidden_P1').classList.remove('hidden');
    btnGoP1.classList.add('hidden');
    document.getElementById('btn_game2p1').classList.remove('hidden');
    console.log(affichageBoardGame);
})






btn_btn1P1.addEventListener('click', () => {

    //Initialisation de mes fontions.
    addTabBoat1();
    addTabBoat2();
    addTabBoat3();
    addTabBoat4();
    addTabBoat5();
    malplacement = 0;

    //Vérification des placements pour chaque tableau de bateau.

    for (let i = 0; i < positionBateau1.length; i++) {
        if (positionBateau1[i] >= 2100 || (positionBateau1[i] == 2009 && positionBateau1[i + 1] == 2010) || (positionBateau1[i] == 2019 && positionBateau1[i + 1] == 2020) || (positionBateau1[i] == 2029 && positionBateau1[i + 1] == 2030) || (positionBateau1[i] == 2039 && positionBateau1[i + 1] == 2040) || (positionBateau1[i] == 2049 && positionBateau1[i + 1] == 2050) || (positionBateau1[i] == 2059 && positionBateau1[i + 1] == 2060) || (positionBateau1[i] == 2069 && positionBateau1[i + 1] == 2070) || (positionBateau1[i] == 2079 && positionBateau1[i + 1] == 2080) || (positionBateau1[i] == 2089 && positionBateau1[i + 1] == 2090)) {
            console.log('bat1 au dessu de 100');
            positionBat1 = positionBateau1[0];
            boat1PlaceDown = document.getElementById('boat-1P1');
            document.getElementById('200000').appendChild(boat1PlaceDown);
            document.getElementById('boat-1P1').classList.remove('ElementPlacer');
            boat1 = document.getElementById('boat-1P1');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-1P1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau2.length; i++) {
        if (positionBateau2[i] >= 2100 || (positionBateau2[i] == 2009 && positionBateau2[i + 1] == 2010) || (positionBateau2[i] == 2019 && positionBateau2[i + 1] == 2020) || (positionBateau2[i] == 2029 && positionBateau2[i + 1] == 2030) || (positionBateau2[i] == 2039 && positionBateau2[i + 1] == 2040) || (positionBateau2[i] == 2049 && positionBateau2[i + 1] == 2050) || (positionBateau2[i] == 2059 && positionBateau2[i + 1] == 2060) || (positionBateau2[i] == 2069 && positionBateau2[i + 1] == 2070) || (positionBateau2[i] == 2079 && positionBateau2[i + 1] == 2080) || (positionBateau2[i] == 2089 && positionBateau2[i + 1] == 2090)) {
            console.log('bat1 au dessu de 100');
            positionBat2 = positionBateau2[0];
            boat2PlaceDown = document.getElementById('boat-2P1');
            document.getElementById('200001').appendChild(boat2PlaceDown);
            document.getElementById('boat-2P1').classList.remove('ElementPlacer');
            boat2 = document.getElementById('boat-2P1');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-2P1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau3.length; i++) {
        if (positionBateau3[i] >= 2100 || (positionBateau3[i] == 2009 && positionBateau3[i + 1] == 2010) || (positionBateau3[i] == 2019 && positionBateau3[i + 1] == 2020) || (positionBateau3[i] == 2029 && positionBateau3[i + 1] == 2030) || (positionBateau3[i] == 2039 && positionBateau3[i + 1] == 2040) || (positionBateau3[i] == 2049 && positionBateau3[i + 1] == 2050) || (positionBateau3[i] == 2059 && positionBateau3[i + 1] == 2060) || (positionBateau3[i] == 2069 && positionBateau3[i + 1] == 2070) || (positionBateau3[i] == 2079 && positionBateau3[i + 1] == 2080) || (positionBateau3[i] == 2089 && positionBateau3[i + 1] == 2090)) {
            positionBat3 = positionBateau3[0];
            boat3PlaceDown = document.getElementById('boat-3P1');
            document.getElementById('200002').appendChild(boat3PlaceDown);
            document.getElementById('boat-3P1').classList.remove('ElementPlacer');
            boat3 = document.getElementById('boat-3P1');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-3P1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau4.length; i++) {
        if (positionBateau4[i] >= 2100 || (positionBateau4[i] == 2009 && positionBateau4[i + 1] == 2010) || (positionBateau4[i] == 2019 && positionBateau4[i + 1] == 2020) || (positionBateau4[i] == 2029 && positionBateau4[i + 1] == 2030) || (positionBateau4[i] == 2039 && positionBateau4[i + 1] == 2040) || (positionBateau4[i] == 2049 && positionBateau4[i + 1] == 2050) || (positionBateau4[i] == 2059 && positionBateau4[i + 1] == 2060) || (positionBateau4[i] == 2069 && positionBateau4[i + 1] == 2070) || (positionBateau4[i] == 2079 && positionBateau4[i + 1] == 2080) || (positionBateau4[i] == 2089 && positionBateau4[i + 1] == 2090)) {
            positionBat4 = positionBateau4[0];
            boat4PlaceDown = document.getElementById('boat-4P1');
            document.getElementById('200003').appendChild(boat4PlaceDown);
            document.getElementById('boat-4P1').classList.remove('ElementPlacer');
            boat4 = document.getElementById('boat-4P1');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-4P1').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau5.length; i++) {
        if (positionBateau5[i] >= 2100 || (positionBateau5[i] == 2009 && positionBateau5[i + 1] == 2010) || (positionBateau5[i] == 2019 && positionBateau5[i + 1] == 2020) || (positionBateau5[i] == 2029 && positionBateau5[i + 1] == 2030) || (positionBateau5[i] == 2039 && positionBateau5[i + 1] == 2040) || (positionBateau5[i] == 2049 && positionBateau5[i + 1] == 2050) || (positionBateau5[i] == 2059 && positionBateau5[i + 1] == 2060) || (positionBateau5[i] == 2069 && positionBateau5[i + 1] == 2070) || (positionBateau5[i] == 2079 && positionBateau5[i + 1] == 2080) || (positionBateau5[i] == 2089 && positionBateau5[i + 1] == 2090)) {
            positionBat5 = positionBateau5[0];
            boat5PlaceDown = document.getElementById('boat-5P1');
            document.getElementById('200004').appendChild(boat5PlaceDown);
            document.getElementById('boat-5P1').classList.remove('ElementPlacer');
            boat5 = document.getElementById('boat-5P1');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-5P1').classList.remove('malplacer');
        }

    }
    // Vérification que des bateaux ne soit pas sure la meme case. 
    for (let i = 0; i < positionBateau1.length; i++) {
        for (let u = 0; u < positionBateau2.length; u++) {
            for (let t = 0; t < positionBateau3.length; t++) {
                for (let o = 0; o < positionBateau4.length; o++) {
                    for (let m = 0; m < positionBateau5.length; m++) {
                        if (positionBateau1[i] == positionBateau2[u] || positionBateau1[i] == positionBateau3[t] || positionBateau1[i] == positionBateau4[o] || positionBateau1[i] == positionBateau5[m] || positionBateau2[u] == positionBateau3[t] || positionBateau2[u] == positionBateau4[o] || positionBateau2[u] == positionBateau5[m] || positionBateau3[t] == positionBateau4[o] || positionBateau3[t] == positionBateau5[m] || positionBateau4[o] == positionBateau5[m]) {
                            malplacement++;
                            //console.log(malplacement);
                            //console.log('probleme');
                        }
                    }
                }
            }
        }
    }

    //console.log(bat1)
    boatPlayer1 = [positionBateau1, positionBateau2, positionBateau3, positionBateau4, positionBateau5];
    console.log(boatPlayer1);


    if (malplacement >= 1) {
        alert('Un ou des bateaux son mal placé !')
    }
    // Si tous est bien placer , j'enleve les élements inutiles , j'affiche le nouveau tableau pour l'ia. 
    else {
        document.getElementById('section_hidden_P1').classList.add('hidden');
        document.getElementById('title_player2').classList.remove('hidden');
    }
})

btnGoP2.addEventListener('click', () => {
    document.getElementById('title_player2').classList.add('hidden');
    document.getElementById('section_hidden_P2').classList.remove('hidden');
    btnGoP2.classList.add('hidden')
    document.getElementById('btn_game2p2').classList.remove('hidden');
})

/* PLAYER TWO */


btn_btn1P2.addEventListener('click', () => {

    //Initialisation de mes fontions.
    addTabBoat1P2();
    addTabBoat2P2();
    addTabBoat3P2();
    addTabBoat4P2();
    addTabBoat5P2();
    malplacement = 0;

    //Vérification des placements pour chaque tableau de bateau.

    for (let i = 0; i < positionBateau1P2.length; i++) {
        if (positionBateau1P2[i] >= 3100 || (positionBateau1P2[i] == 3009 && positionBateau1P2[i + 1] == 3010) || (positionBateau1P2[i] == 3019 && positionBateau1P2[i + 1] == 3020) || (positionBateau1P2[i] == 3029 && positionBateau1P2[i + 1] == 3030) || (positionBateau1P2[i] == 3039 && positionBateau1P2[i + 1] == 3040) || (positionBateau1P2[i] == 3049 && positionBateau1P2[i + 1] == 3050) || (positionBateau1P2[i] == 3059 && positionBateau1P2[i + 1] == 3060) || (positionBateau1P2[i] == 3069 && positionBateau1P2[i + 1] == 3070) || (positionBateau1P2[i] == 3079 && positionBateau1P2[i + 1] == 3080) || (positionBateau1P2[i] == 3089 && positionBateau1P2[i + 1] == 3090)) {
            console.log('bat1 au dessu de 100');
            boat1PlaceDown = document.getElementById('boat-1P2');
            document.getElementById('30000').appendChild(boat1PlaceDown);
            document.getElementById('boat-1P2').classList.remove('ElementPlacer');
            boat1 = document.getElementById('boat-1P2');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-1P2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau2P2.length; i++) {
        if (positionBateau2P2[i] >= 3100 || (positionBateau2P2[i] == 3009 && positionBateau2P2[i + 1] == 3010) || (positionBateau2P2[i] == 3019 && positionBateau2P2[i + 1] == 3020) || (positionBateau2P2[i] == 3029 && positionBateau2P2[i + 1] == 3030) || (positionBateau2P2[i] == 3039 && positionBateau2P2[i + 1] == 3040) || (positionBateau2P2[i] == 3049 && positionBateau2P2[i + 1] == 3050) || (positionBateau2P2[i] == 3059 && positionBateau2P2[i + 1] == 3060) || (positionBateau2P2[i] == 3069 && positionBateau2P2[i + 1] == 3070) || (positionBateau2P2[i] == 3079 && positionBateau2P2[i + 1] == 3080) || (positionBateau2P2[i] == 3089 && positionBateau2P2[i + 1] == 3090)) {
            console.log('bat1 au dessu de 100');
            boat2PlaceDown = document.getElementById('boat-2P2');
            document.getElementById('30001').appendChild(boat2PlaceDown);
            document.getElementById('boat-2P2').classList.remove('ElementPlacer');
            boat2 = document.getElementById('boat-2P2');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-2P2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau3P2.length; i++) {
        if (positionBateau3P2[i] >= 3100 || (positionBateau3P2[i] == 3009 && positionBateau3P2[i + 1] == 3010) || (positionBateau3P2[i] == 3019 && positionBateau3P2[i + 1] == 3020) || (positionBateau3P2[i] == 3029 && positionBateau3P2[i + 1] == 3030) || (positionBateau3P2[i] == 3039 && positionBateau3P2[i + 1] == 3040) || (positionBateau3P2[i] == 3049 && positionBateau3P2[i + 1] == 3050) || (positionBateau3P2[i] == 3059 && positionBateau3P2[i + 1] == 3060) || (positionBateau3P2[i] == 69 && positionBateau3P2[i + 1] == 3070) || (positionBateau3P2[i] == 3079 && positionBateau3P2[i + 1] == 3080) || (positionBateau3P2[i] == 3089 && positionBateau3P2[i + 1] == 3090)) {
            boat3PlaceDown = document.getElementById('boat-3P2');
            document.getElementById('30002').appendChild(boat3PlaceDown);
            document.getElementById('boat-3P2').classList.remove('ElementPlacer');
            boat3 = document.getElementById('boat-3P2');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-3P2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau4P2.length; i++) {
        if (positionBateau4P2[i] >= 3100 || (positionBateau4P2[i] == 3009 && positionBateau4P2[i + 1] == 3010) || (positionBateau4P2[i] == 3019 && positionBateau4P2[i + 1] == 3020) || (positionBateau4P2[i] == 3029 && positionBateau4P2[i + 1] == 3030) || (positionBateau4P2[i] == 3039 && positionBateau4P2[i + 1] == 3040) || (positionBateau4P2[i] == 3049 && positionBateau4P2[i + 1] == 3050) || (positionBateau4P2[i] == 3059 && positionBateau4P2[i + 1] == 3060) || (positionBateau4P2[i] == 3069 && positionBateau4P2[i + 1] == 3070) || (positionBateau4P2[i] == 3079 && positionBateau4P2[i + 1] == 3080) || (positionBateau4P2[i] == 3089 && positionBateau4P2[i + 1] == 3090)) {
            boat4PlaceDown = document.getElementById('boat-4P2');
            document.getElementById('30003').appendChild(boat4PlaceDown);
            document.getElementById('boat-4P2').classList.remove('ElementPlacer');
            boat4 = document.getElementById('boat-4P2');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-4P2').classList.remove('malplacer');
        }
    }
    for (let i = 0; i < positionBateau5P2.length; i++) {
        if (positionBateau5P2[i] >= 3100 || (positionBateau5P2[i] == 3009 && positionBateau5P2[i + 1] == 3010) || (positionBateau5P2[i] == 3019 && positionBateauP2[i + 1] == 3020) || (positionBateau5P2[i] == 3029 && positionBateau5P2[i + 1] == 3030) || (positionBateau5P2[i] == 3039 && positionBateau5P2[i + 1] == 3040) || (positionBateau5P2[i] == 3049 && positionBateau5P2[i + 1] == 3050) || (positionBateau5P2[i] == 3059 && positionBateau5P2[i + 1] == 3060) || (positionBateau5P2[i] == 3069 && positionBateau5P2[i + 1] == 3070) || (positionBateau5P2[i] == 3079 && positionBateau5P2[i + 1] == 3080) || (positionBateau5P2[i] == 3089 && positionBateau5P2[i + 1] == 3090)) {
            boat5PlaceDown = document.getElementById('boat-5P2');
            document.getElementById('30004').appendChild(boat5PlaceDown);
            document.getElementById('boat-5P2').classList.remove('ElementPlacer');
            boat5 = document.getElementById('boat-5P2');
            malplacement++
            break;
        }
        else {
            document.getElementById('boat-5P2').classList.remove('malplacer');
        }

    }
    // Vérification que des bateaux ne soit pas sure la meme case. 
    for (let i = 0; i < positionBateau1P2.length; i++) {
        for (let u = 0; u < positionBateau2P2.length; u++) {
            for (let t = 0; t < positionBateau3P2.length; t++) {
                for (let o = 0; o < positionBateau4P2.length; o++) {
                    for (let m = 0; m < positionBateau5P2.length; m++) {
                        if (positionBateau1P2[i] == positionBateau2P2[u] || positionBateau1P2[i] == positionBateau3P2[t] || positionBateau1P2[i] == positionBateau4P2[o] || positionBateau1P2[i] == positionBateau5P2[m] || positionBateau2P2[u] == positionBateau3P2[t] || positionBateau2P2[u] == positionBateau4P2[o] || positionBateau2P2[u] == positionBateau5P2[m] || positionBateau3P2[t] == positionBateau4P2[o] || positionBateau3P2[t] == positionBateau5P2[m] || positionBateau4P2[o] == positionBateau5P2[m]) {
                            malplacement++;
                            //console.log(malplacement);
                            //console.log('probleme');
                        }
                    }
                }
            }
        }
    }

    //console.log(bat1)
    boatPlayer2 = [positionBateau1P2, positionBateau2P2, positionBateau3P2, positionBateau4P2, positionBateau5P2];
    console.log(positionBateau1P2)
    console.log(boatPlayer2);


    if (malplacement >= 1) {
        alert('Un ou des bateaux son mal placé !')
    }
    // Si tous est bien placer , j'enleve les élements inutiles , j'affiche le nouveau tableau pour l'ia. 
    else {
        //document.getElementById('section_hidden_P2').classList.add('hidden');
        document.getElementById('placeP2').classList.add('hidden');
        document.getElementById('placementexplication').classList.add('hidden');
        document.getElementById('btn_btn1P2').classList.add('hidden');
        document.getElementById('title_player1').classList.remove('hidden');
        document.getElementById('btn_gamep12').classList.remove('hidden');
        document.getElementById('title1P1').classList.remove('hidden');
        document.getElementById('title2P1').classList.add('hidden');
        document.getElementById('title1P2').classList.remove('hidden');
        document.getElementById('title2P2').classList.add('hidden');
        document.getElementById('section_hidden_P2').classList.add('hidden');
    }
})


/*document.getElementById('btn_gamep12').addEventListener('click', () => {
    document.getElementById('playP1').classList.remove('hidden');
    document.getElementById('title_player1').classList.add('hidden');

    if (affichageBoardGame === 1) {
        document.getElementById('section_hidden_P1').classList.remove('hidden');
        document.getElementById('placeP1').classList.add('hidden');
        document.getElementById('btn_btn1P1').classList.add('hidden');
        document.getElementById('placementexplication').classList.add('hidden');
        document.getElementById('bateauplacer').classList.add('hidden');
        document.getElementById('btn_btn2P1').classList.add('hidden');



        document.getElementById('letableau').classList.add('changementplace');
        document.getElementById('letableauvisibleP1').classList.add('changementplace');
        document.getElementById('boat-1P1').classList.add('passagesmallboat-1');
        document.getElementById('boat-2P1').classList.add('passagesmallboat-2');
        document.getElementById('boat-3P1').classList.add('passagesmallboat-3');
        document.getElementById('boat-4P1').classList.add('passagesmallboat-4');
        document.getElementById('boat-5P1').classList.add('passagesmallboat-5');
        document.getElementById('placementGeneralP1').classList.add('placementGridSmall');
    }
    else if (affichageBoardGame == 2) {
        document.getElementById('board_for_gameP1').classList.add('sansvisuel');
    }
})*/

document.getElementById('btn_game2p2').addEventListener('click', () => {
    document.getElementById('playP2').classList.remove('hidden');
    document.getElementById('title_player2').classList.add('hidden');
})

document.getElementById('boardP1').addEventListener('click', (event) => {
    console.log(event.target.id);
    console.log(boatPlayer2);
    if (event.target.id < 4000) {
        let hitPlayer = event.target.id;

        document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
        //console.log(hitPlayer);

        let verif = parseInt(hitPlayer) + 1000;
        //console.log(verif);
        //console.log(boatAi);
        //console.log(verifBoat(verif, boatAi)); 
        if (verifBoat(verif, boatPlayer2) == true) {

            //console.log(verif);
            //console.log(boatAi);
            touchPlayer.push(hitPlayer);
            document.getElementById("cliquer" + hitPlayer).classList.add("hit");
            //console.log(verif);
            //console.log(boatAi);
        } else {

            document.getElementById("cliquer" + hitPlayer).classList.add("miss");
        }
        if (touchPlayer.length == 17) {

            console.log('Victoire Player');

            var playerwinner = player1;
            document.getElementById('winner').append(playerwinner);

            document.getElementById('playP1').classList.add('hidden');
            document.getElementById('sectionVictoireDuo').classList.remove('hidden');

        }

        setTimeout(function () {
            document.getElementById('title_player2').classList.remove('hidden');
            document.getElementById('playP1').classList.add('hidden');
            document.getElementById('btn_gamep12').classList.remove('hidden');

            console.log('tt');
        }, 200);
    }
})

document.getElementById('boardP2').addEventListener('click', (event) => {
    console.log(event.target.id);
    console.log(boatPlayer1);
    if (event.target.id < 4000) {
        let hitPlayer = event.target.id;

        document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
        //console.log(hitPlayer);

        let verif = parseInt(hitPlayer) - 1000;
        //console.log(verif);
        //console.log(boatAi);
        //console.log(verifBoat(verif, boatAi)); 
        if (verifBoat(verif, boatPlayer1) == true) {

            //console.log(verif);
            //console.log(boatAi);
            touchPlayer.push(hitPlayer);
            document.getElementById("cliquer" + hitPlayer).classList.add("hit");
            //console.log(verif);
            //console.log(boatAi);
        } else {

            document.getElementById("cliquer" + hitPlayer).classList.add("miss");
        }
        if (touchPlayer.length == 17) {

            console.log('Victoire Player2');
            let playerwinner = player2
            document.getElementById('winner').append(playerwinner);
            document.getElementById('playP2').classList.add('hidden');
            document.getElementById('sectionVictoireDuo').classList.remove('hidden');

        }

        setTimeout(function () {
            document.getElementById('title_player1').classList.remove('hidden');
            document.getElementById('playP2').classList.add('hidden');
            document.getElementById('btn_gameP12').classList.remove('hidden');
            console.log('tt');
        }, 100);

    }


})

document.getElementById('btn_btn2P2').addEventListener('click', () => {
    document.getElementById("playP2").classList.remove('hidden');
    document.getElementById('title_player2').classList.add('hidden');
    document.getElementById('section_hidden_P2').classList.add('hidden');
})

document.getElementById('btn_gamep12').addEventListener('click', () => {
    document.getElementById("playP1").classList.remove('hidden');
    document.getElementById('title_player1').classList.add('hidden');
    document.getElementById('section_hidden_P2').classList.add('hidden');
})