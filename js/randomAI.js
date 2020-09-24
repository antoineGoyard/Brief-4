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