
var boat1P1 = document.getElementById("boat-1P1");
var boat2P1 = document.getElementById("boat-2P1");
var boat3P1 = document.getElementById("boat-3P1");
var boat4P1 = document.getElementById("boat-4P1");
var boat5P1 = document.getElementById("boat-5P1");

var boat1P2 = document.getElementById("boat-1P2");
var boat2P2 = document.getElementById("boat-2P2");
var boat3P2 = document.getElementById("boat-3P2");
var boat4P2 = document.getElementById("boat-4P2");
var boat5P2 = document.getElementById("boat-5P2");


document.getElementById("btn_btn2P1").addEventListener('click', () => {


    // J'initialise les src de chaque bateau
    let srcboat1 = boat1P1.getAttribute("src");
    let srcboat2 = boat2P1.getAttribute("src");
    let srcboat3 = boat3P1.getAttribute("src");
    let srcboat4 = boat4P1.getAttribute("src");
    let srcboat5 = boat5P1.getAttribute("src");


    // Je vérifie que le bateau ne soit pas déja placer sure la grille
    if (boat1P1.className != 'draggable bateaunoturn ElementPlacer ') {
        //Je change l'image , et je mais une image tourner a 90°
        if (srcboat1 == "./img/vaisseau1Bleu.png") {
            srcboat1 = "./img/vaisseau1Bleu90.png";
            boat1P1.classList.add('boatturn');
            boat1P1.classList.add('affichageboatturn');
            boat1P1.classList.remove('bateaunoturn');
        }
        else {
            srcboat1 = "./img/vaisseau1Bleu.png";
            boat1P1.classList.remove('boatturn');
            boat1P1.classList.add('bateaunoturn');
            boat1P1.classList.remove('affichageboatturn');
        };
    }
    else { }
    boat1P1.setAttribute("src", srcboat1);



    if (boat2P1.className != 'draggable bateaunoturn ElementPlacer') {
        if (srcboat2 == "./img/vaisseau2Bleu.png") {
            srcboat2 = "./img/vaisseau2Bleu90.png";
            boat2P1.classList.add('boatturn')
            boat2P1.classList.add('affichageboatturn');
            boat2P1.classList.remove('bateaunoturn');
        }
        else {
            srcboat2 = "./img/vaisseau2Bleu.png";
            boat2P1.classList.remove('boatturn');
            boat2P1.classList.add('bateaunoturn')
            boat2P1.classList.remove('affichageboatturn');
        };
    }
    else { }
    boat2P1.setAttribute("src", srcboat2);



    if (boat3P1.className != 'draggable bateaunoturn ElementPlacer') {
        if (srcboat3 == "./img/vaisseau3Bleu.png") {
            srcboat3 = "./img/vaisseau3Bleu90.png";
            boat3P1.classList.add('boatturn')
            boat3P1.classList.add('affichageboatturn');
            boat3P1.classList.remove('bateaunoturn');
        }
        else {
            srcboat3 = "./img/vaisseau3Bleu.png";
            boat3P1.classList.remove('boatturn');
            boat3P1.classList.remove('affichageboatturn');
            boat3P1.classList.add('bateaunoturn')
        };
    }

    else { }
    boat3P1.setAttribute("src", srcboat3);



    if (boat4P1.className != 'draggable bateaunoturn ElementPlacer') {
        if (srcboat4 == "./img/vaisseau3Bleu.png") {
            srcboat4 = "./img/vaisseau3Bleu90.png";
            boat4P1.classList.add('boatturn')
            boat4P1.classList.add('affichageboatturn');
            boat4P1.classList.remove('bateaunoturn');
        }
        else {
            srcboat4 = "./img/vaisseau3Bleu.png";
            boat4P1.classList.remove('boatturn');
            boat4P1.classList.remove('affichageboatturn');
            boat4P1.classList.add('bateaunoturn');
        };
    }
    else { }
    boat4P1.setAttribute("src", srcboat4);



    if (boat5P1.className != 'draggable bateaunoturn ElementPlacer') {
        if (srcboat5 == "./img/vaisseau3Bleu.png") {
            srcboat5 = "./img/vaisseau3Bleu90.png";
            boat5P1.classList.add('boatturn')
            boat5P1.classList.add('affichageboatturn');
            boat5P1.classList.remove('bateaunoturn');
        }
        else {
            srcboat5 = "./img/vaisseau3Bleu.png";
            boat5P1.classList.remove('boatturn');
            boat5P1.classList.remove('affichageboatturn');
            boat5P1.classList.add('bateaunoturn');
        };
    }
    else { }
    boat5P1.setAttribute("src", srcboat5);
})




document.getElementById("btn_btn2P2").addEventListener('click', () => {


    // J'initialise les src de chaque bateau
    let srcboat1 = boat1P2.getAttribute("src");
    let srcboat2 = boat2P2.getAttribute("src");
    let srcboat3 = boat3P2.getAttribute("src");
    let srcboat4 = boat4P2.getAttribute("src");
    let srcboat5 = boat5P2.getAttribute("src");


    // Je vérifie que le bateau ne soit pas déja placer sure la grille
    if (boat1P2.className != 'draggable bateaunoturn ElementPlacer ') {
        //Je change l'image , et je mais une image tourner a 90°
        if (srcboat1 == "./img/vaisseau1Rouge.png") {
            srcboat1 = "./img/vaisseau1Rouge90.png";
            boat1P2.classList.add('boatturn');
            boat1P2.classList.add('affichageboatturn');
            boat1P2.classList.remove('bateaunoturn');
        }
        else {
            srcboat1 = "./img/vaisseau1Rouge.png";
            boat1P2.classList.remove('boatturn');
            boat1P2.classList.add('bateaunoturn');
            boat1P2.classList.remove('affichageboatturn');
        };
    }
    else { }
    boat1P2.setAttribute("src", srcboat1);



    if (boat2P2.className != 'draggable bateaunoturn ElementPlacer') {
        if (srcboat2 == "./img/vaisseau2Rouge.png") {
            srcboat2 = "./img/vaisseau2Rouge90.png";
            boat2P2.classList.add('boatturn')
            boat2P2.classList.add('affichageboatturn');
            boat2P2.classList.remove('bateaunoturn');
        }
        else {
            srcboat2 = "./img/vaisseau2Rouge.png";
            boat2P2.classList.remove('boatturn');
            boat2P2.classList.add('bateaunoturn')
            boat2P2.classList.remove('affichageboatturn');
        };
    }
    else { }
    boat2P2.setAttribute("src", srcboat2);



    if (boat3P2.className != 'draggable bateaunoturn ElementPlacer') {
        if (srcboat3 == "./img/vaisseau3Rouge.png") {
            srcboat3 = "./img/vaisseau3Rouge90.png";
            boat3P2.classList.add('boatturn')
            boat3P2.classList.add('affichageboatturn');
            boat3P2.classList.remove('bateaunoturn');
        }
        else {
            srcboat3 = "./img/vaisseau3Rouge.png";
            boat3P2.classList.remove('boatturn');
            boat3P2.classList.remove('affichageboatturn');
            boat3P2.classList.add('bateaunoturn')
        };
    }

    else { }
    boat3P2.setAttribute("src", srcboat3);



    if (boat4P2.className != 'draggable bateaunoturn ElementPlacer') {
        if (srcboat4 == "./img/vaisseau3Rouge.png") {
            srcboat4 = "./img/vaisseau3Rouge90.png";
            boat4P2.classList.add('boatturn')
            boat4P2.classList.add('affichageboatturn');
            boat4P2.classList.remove('bateaunoturn');
        }
        else {
            srcboat4 = "./img/vaisseau3Rouge.png";
            boat4P2.classList.remove('boatturn');
            boat4P2.classList.remove('affichageboatturn');
            boat4P2.classList.add('bateaunoturn');
        };
    }
    else { }
    boat4P2.setAttribute("src", srcboat4);



    if (boat5P2.className != 'draggable bateaunoturn ElementPlacer') {
        if (srcboat5 == "./img/vaisseau3Rouge.png") {
            srcboat5 = "./img/vaisseau3Rouge90.png";
            boat5P2.classList.add('boatturn')
            boat5P2.classList.add('affichageboatturn');
            boat5P2.classList.remove('bateaunoturn');
        }
        else {
            srcboat5 = "./img/vaisseau3Rouge.png";
            boat5P2.classList.remove('boatturn');
            boat5P2.classList.remove('affichageboatturn');
            boat5P2.classList.add('bateaunoturn');
        };
    }
    else { }
    boat5P2.setAttribute("src", srcboat5);
})
