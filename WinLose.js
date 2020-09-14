// CONDITION WIN-LOSE 

let ia = 1; //Si = 0 l'ia a perdu
let joueur = 1; // Si = 0 le joueur a perdi 

let bat1 = [1,2];
let bat2 = [3,4];

let bat3 = [5,6];
let bat4 = [7,8];

let shipIa =  [bat1];
let shipJoueur = [bat3,bat4];
/**
 * La fonction vérifie la taille de la liste des bateaux.
 * Si la longueur est de 0, alors c'est que l'ia n'a plus de bateau.
 * On passe donc ia a 0 ce qui déclanche la fin de la partie
 */
function iaLose ()
{
    if( shipIa.length == 0)
    {
        ia = 0;
        console.log("perdu");
    }
}

/**
 * La fonction vérifie la taille de la liste des bateaux.
 * Si la longueur est de 0, alors c'est que le joueur  n'a plus de bateaux.
 * On passe donc joueur  a 0 ce qui déclanche la fin de la partie
 */
function joueurLose ()
{
    if( shipJoueur.length == 0)
    {
        shipJoueur = 0;
    }
}
