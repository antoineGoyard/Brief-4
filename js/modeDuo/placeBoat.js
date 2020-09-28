var boat = new Array;
var boatPlayer = new Array;

// Ecriture dans les tableaux , pour chaque bateaux .

    /* Placement Player  */

function addTabBoat1() {
    if (document.getElementById('boat-1P1').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-1P1').parentNode.id;
        console.log(bateau1);
        let position1 = parseInt(bateau1) + 1000;
        console.log(position1);
        let position2 = position1 + 1;
        let position3 = position2 + 1;
        let position4 = position3 + 1;
        let position5 = position4 + 1;

        positionBateau1 = [position1, position2, position3, position4, position5];

        console.log(positionBateau1);
    }
    else {
        var bateau1 = document.getElementById('boat-1P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        console.log(bateau1);
        let position2 = position1 + 10;
        let position3 = position2 + 10;
        let position4 = position3 + 10;
        let position5 = position4 + 10;

        positionBateau1 = [position1, position2, position3, position4, position5];

    }



    //console.log(bat1);

}
function addTabBoat2() {
    if (document.getElementById('boat-2P1').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-2P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;
        let position4 = position3 + 1;

        positionBateau2 = [position1, position2, position3, position4];

        console.log(positionBateau2);
    }
    else {
        var bateau1 = document.getElementById('boat-2P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;
        let position4 = position3 + 10;

        positionBateau2 = [position1, position2, position3, position4];

    }

}
function addTabBoat3() {
    if (document.getElementById('boat-3P1').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-3P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;

        positionBateau3 = [position1, position2, position3];

        console.log(positionBateau3);
    }
    else {
        var bateau1 = document.getElementById('boat-3P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;

        positionBateau3 = [position1, position2, position3];

    }

}
function addTabBoat4() {

    if (document.getElementById('boat-4P1').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-4P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;

        positionBateau4 = [position1, position2, position3];

        console.log(positionBateau4);
    }
    else {
        var bateau1 = document.getElementById('boat-4P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;

        positionBateau4 = [position1, position2, position3];

    }

}
function addTabBoat5() {
    if (document.getElementById('boat-5P1').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-5P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        let position2 = position1 + 1;

        positionBateau5 = [position1, position2];

        console.log(positionBateau5);
    }
    else {
        var bateau1 = document.getElementById('boat-5P1').parentNode.id;
        let position1 = parseInt(bateau1) + 1000;
        let position2 = position1 + 10;

        positionBateau5 = [position1, position2];

    }

}


/* Placement Player 2 */




function addTabBoat1P2() {
    if (document.getElementById('boat-1P2').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-1P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;
        let position4 = position3 + 1;
        let position5 = position4 + 1;

        positionBateau1P2 = [position1, position2, position3, position4, position5];

        console.log(positionBateau1P2);
    }
    else {
        var bateau1 = document.getElementById('boat-1P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;
        let position4 = position3 + 10;
        let position5 = position4 + 10;

        positionBateau1P2 = [position1, position2, position3, position4, position5];

    }



    //console.log(bat1);

}
function addTabBoat2P2() {
    if (document.getElementById('boat-2P2').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-2P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;
        let position4 = position3 + 1;

        positionBateau2P2 = [position1, position2, position3, position4];

        console.log(positionBateau2);
    }
    else {
        var bateau1 = document.getElementById('boat-2P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;
        let position4 = position3 + 10;

        positionBateau2P2 = [position1, position2, position3, position4];

    }

}
function addTabBoat3P2() {
    if (document.getElementById('boat-3P2').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-3P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;

        positionBateau3P2 = [position1, position2, position3];

        console.log(positionBateau3P2);
    }
    else {
        var bateau1 = document.getElementById('boat-3P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;

        positionBateau3P2 = [position1, position2, position3];

    }

}
function addTabBoat4P2() {

    if (document.getElementById('boat-4P2').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-4P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 1;
        let position3 = position2 + 1;

        positionBateau4P2 = [position1, position2, position3];

        console.log(positionBateau4P2);
    }
    else {
        var bateau1 = document.getElementById('boat-4P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 10;
        let position3 = position2 + 10;

        positionBateau4P2 = [position1, position2, position3];

    }

}
function addTabBoat5P2() {
    if (document.getElementById('boat-5P2').className == 'draggable boatturn ElementPlacer') {
        var bateau1 = document.getElementById('boat-5P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 1;

        positionBateau5P2 = [position1, position2];

        console.log(positionBateau5);
    }
    else {
        var bateau1 = document.getElementById('boat-5P2').parentNode.id;
        let position1 = bateau1 - 97000;
        let position2 = position1 + 10;

        positionBateau5P2 = [position1, position2];

    }

}