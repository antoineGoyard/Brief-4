// Bouton qui permet de tourner les bateaux
btn2.addEventListener('click', () => {


    // J'initialise les src de chaque bateau
    let srcboat1 = boat1.getAttribute("src");
    let srcboat2 = boat2.getAttribute("src");
    let srcboat3 = boat3.getAttribute("src");
    let srcboat4 = boat4.getAttribute("src");
    let srcboat5 = boat5.getAttribute("src");

    if (people == "republique") {
        // Je vérifie que le bateau ne soit pas déja placer sure la grille
        if (boat1.className != 'draggable bateaunoturn ElementPlacer ') {
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
        else { }
        boat1.setAttribute("src", srcboat1);



        if (boat2.className != 'draggable bateaunoturn ElementPlacer') {
            if (srcboat2 == "./img/vaisseau2Bleu.png") {
                srcboat2 = "./img/vaisseau2Bleu90.png";
                boat2.classList.add('boatturn')
                boat2.classList.add('affichageboatturn');
                boat2.classList.remove('bateaunoturn');
            }
            else {
                srcboat2 = "./img/vaisseau2Bleu.png";
                boat2.classList.remove('boatturn');
                boat2.classList.add('bateaunoturn')
                boat2.classList.remove('affichageboatturn');
            };
        }
        else { }
        boat2.setAttribute("src", srcboat2);



        if (boat3.className != 'draggable bateaunoturn ElementPlacer') {
            if (srcboat3 == "./img/vaisseau3Bleu.png") {
                srcboat3 = "./img/vaisseau3Bleu90.png";
                boat3.classList.add('boatturn')
                boat3.classList.add('affichageboatturn');
                boat3.classList.remove('bateaunoturn');
            }
            else {
                srcboat3 = "./img/vaisseau3Bleu.png";
                boat3.classList.remove('boatturn');
                boat3.classList.remove('affichageboatturn');
                boat3.classList.add('bateaunoturn')
            };
        }

        else { }
        boat3.setAttribute("src", srcboat3);



        if (boat4.className != 'draggable bateaunoturn ElementPlacer') {
            if (srcboat4 == "./img/vaisseau3Bleu.png") {
                srcboat4 = "./img/vaisseau3Bleu90.png";
                boat4.classList.add('boatturn')
                boat4.classList.add('affichageboatturn');
                boat4.classList.remove('bateaunoturn');
            }
            else {
                srcboat4 = "./img/vaisseau3Bleu.png";
                boat4.classList.remove('boatturn');
                boat4.classList.remove('affichageboatturn');
                boat4.classList.add('bateaunoturn');
            };
        }
        else { }
        boat4.setAttribute("src", srcboat4);



        if (boat5.className != 'draggable bateaunoturn ElementPlacer') {
            if (srcboat5 == "./img/vaisseau3Bleu.png") {
                srcboat5 = "./img/vaisseau3Bleu90.png";
                boat5.classList.add('boatturn')
                boat5.classList.add('affichageboatturn');
                boat5.classList.remove('bateaunoturn');
            }
            else {
                srcboat5 = "./img/vaisseau3Bleu.png";
                boat5.classList.remove('boatturn');
                boat5.classList.remove('affichageboatturn');
                boat5.classList.add('bateaunoturn');
            };
        }
        else { }
        boat5.setAttribute("src", srcboat5);

    }
    else if (people == "empire")
    {

        if (boat1.className === 'draggable bateaunoturn ElementPlacer ') { }
        else {

            //Je change l'image , et je mais une image tourner a 90°
            if (srcboat1 == "./img/vaisseau1Rouge.png") {
                srcboat1 = "./img/vaisseau1Rouge90.png";
                boat1.classList.add('boatturn');
                boat1.classList.add('affichageboatturn');
                boat1.classList.remove('bateaunoturn');
            }
            else {
                srcboat1 = "./img/vaisseau1Rouge.png";
                boat1.classList.remove('boatturn');
                boat1.classList.add('bateaunoturn');
                boat1.classList.remove('affichageboatturn');
            };
        }
        boat1.setAttribute("src", srcboat1);



        if (boat2.className === 'draggable bateaunoturn ElementPlacer') {

        }
        else {

            if (srcboat2 == "./img/vaisseau2Rouge.png") {
                srcboat2 = "./img/vaisseau2Rouge90.png";
                boat2.classList.add('boatturn')
                boat2.classList.add('affichageboatturn');
                boat2.classList.remove('bateaunoturn');
            }
            else {
                srcboat2 = "./img/vaisseau2Rouge.png";
                boat2.classList.remove('boatturn');
                boat2.classList.add('bateaunoturn')
                boat2.classList.remove('affichageboatturn');
            };
        }
        boat2.setAttribute("src", srcboat2);



        if (boat3.className === 'draggable bateaunoturn ElementPlacer') {

        }
        else {

            if (srcboat3 == "./img/vaisseau3Rouge.png") {
                srcboat3 = "./img/vaisseau3Rouge90.png";
                boat3.classList.add('boatturn')
                boat3.classList.add('affichageboatturn');
                boat3.classList.remove('bateaunoturn');
            }
            else {
                srcboat3 = "./img/vaisseau3Rouge.png";
                boat3.classList.remove('boatturn');
                boat3.classList.remove('affichageboatturn');
                boat3.classList.add('bateaunoturn')
            };
        }
        boat3.setAttribute("src", srcboat3);



        if (boat4.className === 'draggable bateaunoturn ElementPlacer') {

        }
        else { 

            if (srcboat4 == "./img/vaisseau3Rouge.png") {
                srcboat4 = "./img/vaisseau3Rouge90.png";
                boat4.classList.add('boatturn')
                boat4.classList.add('affichageboatturn');
                boat4.classList.remove('bateaunoturn');
            }
            else {
                srcboat4 = "./img/vaisseau3Rouge.png";
                boat4.classList.remove('boatturn');
                boat4.classList.remove('affichageboatturn');
                boat4.classList.add('bateaunoturn');
            };
        }
        boat4.setAttribute("src", srcboat4);



        if (boat5.className === 'draggable bateaunoturn ElementPlacer') {

        }
        else {

            if (srcboat5 == "./img/vaisseau3Rouge.png") {
                srcboat5 = "./img/vaisseau3Rouge90.png";
                boat5.classList.add('boatturn')
                boat5.classList.add('affichageboatturn');
                boat5.classList.remove('bateaunoturn');
            }
            else {
                srcboat5 = "./img/vaisseau3Rouge.png";
                boat5.classList.remove('boatturn');
                boat5.classList.remove('affichageboatturn');
                boat5.classList.add('bateaunoturn');
            };
        }
        boat5.setAttribute("src", srcboat5);
    }



    


});