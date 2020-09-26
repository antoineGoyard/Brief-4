
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