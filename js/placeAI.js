
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