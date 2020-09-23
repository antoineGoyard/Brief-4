
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




function findNext()
{
    let ite = 0;
        for (let i = 0; i < alreadyHitAi.length; i++) 
        {
            if ((touchAi[touchAi.length-1] == 9)||(touchAi[touchAi.length-1] == 19)||(touchAi[touchAi.length-1] == 29)||(touchAi[touchAi.length-1] == 39)||(touchAi[touchAi.length-1] == 49)||(touchAi[touchAi.length-1] == 59)||(touchAi[touchAi.length-1] == 69)||(touchAi[touchAi.length-1] == 79)||(touchAi[touchAi.length-1] == 89)||(touchAi[touchAi.length-1] == 99))
            {
                break;
            }
            if((touchAi[touchAi.length-1] +1 ) == alreadyHitAi[i])
            {
                break;
            }
            ite++;
        }
        if(ite== alreadyHitAi.length)
        {
            if(verifBoat((touchAi[touchAi.length-1] +1 ),boatPlayer) == true )
            {
                alreadyHitAi.push(touchAi[touchAi.length-1] +1);
                touchAi.push(touchAi[touchAi.length-1] +1);
                document.getElementById(touchAi[touchAi.length-1]).classList.add("hit");
                return;
            }else
            {
                alreadyHitAi.push(touchAi[touchAi.length-1]+1);
                console.log(touchAi[touchAi.length-1]+1);
                document.getElementById(alreadyHitAi[alreadyHitAi.length-1]).classList.add("miss");
                return;
            }
        }
        ite = 0;
        for (let i = 0; i < alreadyHitAi.length; i++) 
        {
            if ((touchAi[touchAi.length-1] == 0)||(touchAi[touchAi.length-1] == 10)||(touchAi[touchAi.length-1] == 20)||(touchAi[touchAi.length-1] == 30)||(touchAi[touchAi.length-1] == 40)||(touchAi[touchAi.length-1] == 50)||(touchAi[touchAi.length-1] == 60)||(touchAi[touchAi.length-1] == 70)||(touchAi[touchAi.length-1] == 80)||(touchAi[touchAi.length-1] == 90))
            {
                break;
            }
            if((touchAi[touchAi.length-1] -1 ) == alreadyHitAi[i])
            {
                break;
            }
            ite++;
        }
        if(ite == alreadyHitAi.length)
            {
                if(verifBoat((touchAi[touchAi.length-1] -1 ),boatPlayer) == true )
                {
                    alreadyHitAi.push(touchAi[touchAi.length-1] -1);
                    touchAi.push(touchAi[touchAi.length-1] -1);
                    document.getElementById(touchAi[touchAi.length-1]).classList.add("hit");
                    return;
                }else
                {
                    alreadyHitAi.push(touchAi[touchAi.length-1]-1);
                    console.log(touchAi[touchAi.length-1]-1);
                    document.getElementById(alreadyHitAi[alreadyHitAi.length-1]).classList.add("miss");
                    return;
                }
            }
        ite=0;
        for (let i = 0; i < alreadyHitAi.length; i++) 
        {
            if ((touchAi[touchAi.length-1] == 90)||(touchAi[touchAi.length-1] == 91)||(touchAi[touchAi.length-1] == 92)||(touchAi[touchAi.length-1] == 93)||(touchAi[touchAi.length-1] == 94)||(touchAi[touchAi.length-1] == 95)||(touchAi[touchAi.length-1] == 96)||(touchAi[touchAi.length-1] == 97)||(touchAi[touchAi.length-1] == 98)||(touchAi[touchAi.length-1] == 99))
            {
                break;
            }
            if((touchAi[touchAi.length-1] +10 ) == alreadyHitAi[i])
            {
                break;
            }
            ite ++;
        }
        if(ite == alreadyHitAi.length)
            {
                if(verifBoat((touchAi[touchAi.length-1]+10 ),boatPlayer) == true )
                {
                    alreadyHitAi.push(touchAi[touchAi.length-1] +10);
                    touchAi.push(touchAi[touchAi.length-1] +10);
                    document.getElementById(touchAi[touchAi.length-1]).classList.add("hit");
                    return;
                }else
                {
                    alreadyHitAi.push(touchAi[touchAi.length-1]+10);
                    console.log(touchAi[touchAi.length-1]+10);
                    document.getElementById(alreadyHitAi[alreadyHitAi.length-1]).classList.add("miss");
                    return;
                }
            }
            ite=0;
            for (let i = 0; i < alreadyHitAi.length; i++) 
            {
                if ((touchAi[touchAi.length-1] == 0)||(touchAi[touchAi.length-1] == 1)||(touchAi[touchAi.length-1] == 2)||(touchAi[touchAi.length-1] == 3)||(touchAi[touchAi.length-1] == 4)||(touchAi[touchAi.length-1] == 5)||(touchAi[touchAi.length-1] == 6)||(touchAi[touchAi.length-1] == 7)||(touchAi[touchAi.length-1] == 8)||(touchAi[touchAi.length-1] == 9))    
                {
                    break;
                }
                if((touchAi[touchAi.length-1] -10 ) == alreadyHitAi[i])
                {
                    break;
                }
                ite ++;
            }
            if(ite == alreadyHitAi.length)
                {
                    if(verifBoat((touchAi[touchAi.length-1]-10 ),boatPlayer) == true )
                    {
                        alreadyHitAi.push(touchAi[touchAi.length-1] -10);
                        touchAi.push(touchAi[touchAi.length-1] -10);
                        document.getElementById(touchAi[touchAi.length-1]).classList.add("hit");
                        return;
                    }else
                    {
                        alreadyHitAi.push(touchAi[touchAi.length-1]-10);
                        console.log(touchAi[touchAi.length-1]-10);
                        document.getElementById(alreadyHitAi[alreadyHitAi.length-1]).classList.add("miss");
                        return;
                    }
                }
       
        if (verifBoat(actionAi(alreadyHitAi), boatPlayer) == true) 
                {  
                    verifAround = true;
                    alreadyHitAi.push(coup);
                    touchAi.push(coup);
                    document.getElementById(coup).classList.add("hit");
                } else 
                {
                    alreadyHitAi.push(coup);
                    console.log(coup);
                    document.getElementById(coup).classList.add("miss");
                }
        verifAround = false;
        return;
}






function iKillYou() 
{
    if (touch1Time.length!=[])
    {
        for (let i = 0; i < touch1Time.length; i++) 
        {
            if(touch1Time[i] != null)
            {

                alreadyHitAi.push(touch1Time[i]);
                touchAi.push(touch1Time[i]);
                document.getElementById(touch1Time[i]).classList.add("hit");
             
                touch1Time[i] = null;
                if(coule(touch1Time)==true)
                {
                    touch1Time=[];
                }
                return;
            }
        }
    }
        else
        {
            touch1Time=[];
            if (verifBoat(actionAi(alreadyHitAi), boatPlayer) == true) 
            {  
                toucheRecupTab(boatPlayer,touch1Time,coup);
                alreadyHitAi.push(coup);
                touchAi.push(coup);
                document.getElementById(coup).classList.add("hit");
            } else 
            {
                alreadyHitAi.push(coup);
                console.log(coup);
                document.getElementById(coup).classList.add("miss");
            }
            return;
        }
    
}


function coule(tab)
{
    for (let i = 0; i< tab.length; i++)
    {
        if (tab[i] != null) 
        {
            return false 
        }
    }
    return true; 
}

function toucheRecupTab(tab,tab1,x) 
{
    for (let i = 0; i < tab.length; i++) 
    {
        for (let j = 0; j < tab[i].length; j++)
        {
            if (tab[i][j]==x) 
            {
                tab[i][j] = null;
                for (let k = 0; k < tab[i].length; k++) 
                {
                   tab1.push(tab[i][k]);
                } 
            }
        }
    }

}