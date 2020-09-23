
// IA 
// TIRE ALEATOIRE
// AMELIORATION QUI PERMET LA RECHERCHE AUTOUR EN CAS DE TOUCHE
// A FAIRE : CREATION EN BONUS D'UN MODE DOOM QUI LIS DIRECTEMENT LES CASES DE POSITION DU JOUEUR 






//coup --> cette variable est le coup joué par l'ia quand c'est aléatoire 
let test = true; // si true le dernier coup a touché a touché si false ce coup était raté
let prochainCoup =0;// Si le dernier coup a toucher cette variable sera le prochain coup a faire pour l'IA
let x = 2; //niveau de difficulté qui permet de savoir la taille du tableau contenant les bateaux
let already = [];

/**
 * fonction qui permet a l'IA de jouer un coup aléatoire, de plus elle vérifie si le coup n'a pas déja été joué 
 */
function actionAi(already)
{
    coup = Math.floor(Math.random() * 100);
    //let verif = already.length;
    
    for (let i = 0; i < already.length; i++) 
    {

        if (coup == already[i]) 
        {
            coup = actionAi(already);
            break;
        }
    }
    return coup;
}

/**
 * cette fonction vérifie si l'IA Touche les bateaux du joueur
 * Elle verifie le tableau de bateau du joueur 
 */
/*
function touche()
{
    for (let i = 0; i < x; i++)
     {
        for(let j = 0; j< bats[i].length;j++)
        {
            if (coup == bats[i][j] ) 
            {
                return console.log("touché");
            }
        }
    }
    return console.log(" a cotech");
}
*/
/*iaAction();
already.push(coup);
console.log(already);
touche();*/

/**
 * Cette fonction permet de rendre l'IA plus performante.
 * Elle permet si le coup d'avant a touché de tirer sur les cases autour sans pour autant sortir du tableau ou a l'opposé
 * Il me reste a segmenter en plusieurs fonctions la fonction pour la rendre plus lisible
 */

 /*
function findNext(around)
{
        let tampon= 0;
        for (let i = 0; i < already.length; i++) 
        {
            if ((coup==9)||(coup==19)||(coup==29)||(coup==39)||(coup==49)||(coup==59)||(coup==69)||(coup==79)||(coup==89)||(coup==99))
            {
                break;
            }
            if((coup+1) != already[i])
            {
                tampon ++;
                if (tampon == already.length) 
                {
                    prochainCoup = coup+1;
                    return prochainCoup;    
                }
            }
        }

        tampon = 0;
        for (let i = 0; i < already.length; i++) 
        {
            if ((coup==0)||(coup==10)||(coup==20)||(coup==30)||(coup==40)||(coup==50)||(coup==60)||(coup==70)||(coup==80)||(coup==90))
            {
                break;
            }
            if((coup-1) != already[i])
            {
                tampon ++;
                if (tampon == already.length) 
                {
                    prochainCoup = coup-1;
                    return prochainCoup;    
                }
            }
        }

        tampon = 0;
        for (let i = 0; i < already.length; i++) 
        {
            if ((coup==90)||(coup==91)||(coup==92)||(coup==93)||(coup==94)||(coup==95)||(coup==96)||(coup==97)||(coup==98)||(coup==99))
            {
                break;
            }
            if((coup+10) != already[i])
            {
                tampon ++;
                if (tampon == already.length) 
                {
                    prochainCoup = coup+10;
                    return prochainCoup;    
                }
            }
        }

        tampon = 0;
        for (let i = 0; i < already.length; i++)
         {
            if ((coup==0)||(coup==1)||(coup==2)||(coup==3)||(coup==4)||(coup==5)||(coup==6)||(coup==7)||(coup==8)||(coup==9))
            {
                break;
            }
            if((coup-10) != already[i])
            {
                tampon ++;
                if (tampon == already.length) 
                {
                    prochainCoup = coup-10;
                    return prochainCoup;    
                }
            }
        }
    around = null;
}



findNext(test);
console.log(prochainCoup);*/