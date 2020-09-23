/**
 * gameLvl0 is the first of the four functions that allow you to play.
 *  It includes a large part of the functions created in the other files .js
 *  She has a basic AI that plays her moves only randomly
 */

////////////////////////////////////////////////////////////////////
let around = null;
let touchAi = [];
let alreadyHitAi = [];
let coup;
let actualTurn = 0;
let touchPlayer = [];
let alreadyHitPlayer=[];
let hitPlayer; // is the number of the box chosen by the player

//////////////////////////////////////////////////////////////////

function gameLvl0() 
{   
    while (touchAi.length >= 15 || touchPlayer.length >= 15) //the stoppage condition is the defeat of a player.If a player has hit 15 times he has necessarily won.
    {
        actualTurn ++ ;

        // PLAYER TURN 

        document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
        { 
            if(event.target.id <= 4000)
            {
                hitPlayer = event.target.id;
                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
            }
            else
            {
                alert('Vous avez déjà tiré a cet endroit !')
            }
        });
        alreadyHitPlayer.push(hitPlayer);

        if(verifBoat(hitPlayer,boatAi) == true)
        {
            touchPlayer.push(hitPlayer);
            document.getElementById("cliquer" + hitPlayer).classList.add("hit");

        }else 
        {
            document.getElementById("cliquer" + hitPlayer).classList.add("miss");
        }
        if (touchAi.length >= 15 || touchPlayer.length >= 15) 
        {
            break;
        }
        
        // Mettre en place Un temps mort entre jouer et IA 
        // AI TURN
        
        if (verifBoat(actionAi(),boatPlayer)==true)  
        {
            alreadyHitAi.push(coup);
            touchAi.push(coup);
            document.getElementById(coup).classList("hit");
        }else
        {
            alreadyHitAi.push(coup);
               document.getElementById(coup).classList("miss");
        }
    }
}


/**
 * gameLvl0 is the first of the four functions that allow you to play.
 *  It includes a large part of the functions created in the other files .js
 *  She has a basic AI that plays her moves only randomly
 */


function gameLvl1() 
{
    while (touchAi.length >= 15 || touchPlayer.length >= 15) //the stoppage condition is the defeat of a player.If a player has hit 15 times he has necessarily won.
    {
        actualTurn ++ ;

        // PLAYER TURN 

        document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
        { 
            if(event.target.id <= 4000)
            {
                hitPlayer = event.target.id;
                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
            }
            else
            {
                alert('Vous avez déjà tiré a cet endroit !')
            }
        });
        alreadyHitPlayer.push(hitPlayer);

        if(verifBoat(hitPlayer,boatAi) == true)
        {
            touchPlayer.push(hitPlayer);
            document.getElementById("cliquer" + hitPlayer).classList.add("hit");

        }else 
        {
            document.getElementById("cliquer" + hitPlayer).classList.add("miss");
        }
        if (touchAi.length >= 15 || touchPlayer.length >= 15) 
        {
            break;
        }

        // AI TURN 
        if( around != null)
        {
            findAround(around);
        }
        if (verifBoat(actionAi(),boatPlayer)==true)  
        {
            alreadyHitAi.push(coup);
            touchAi.push(coup);
            document.getElementById(coup).classList("hit");
        }else
        {
            alreadyHitAi.push(coup);
            document.getElementById(coup).classList("miss");
        }

    }
}

/**
 * gameLvl0 is the first of the four functions that allow you to play.
 *  It includes a large part of the functions created in the other files .js
 *  She has a basic AI that plays her moves only randomly
 */


function gameLvl2() 
{
    
}


/**
 * gameLvl0 is the first of the four functions that allow you to play.
 *  It includes a large part of the functions created in the other files .js
 *  She has a basic AI that plays her moves only randomly
 */

function gameLvlDoom()
{
    let triche = [];
    let tricheIndex= 0;
    for (let i = 0; i < boatPlayer.length; i++) 
    {
        for (let j = 0; j < boatPlayer[i]; j++) 
        {
            triche.push(boatPlayer[i][j]);
        }   
    }
    
    while (touchAi.length >= 15 || touchPlayer.length >= 15) //the stoppage condition is the defeat of a player.If a player has hit 15 times he has necessarily won.
    {
        actualTurn ++ ;

        // PLAYER TURN 

        document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
        { 
            if(event.target.id <= 4000)
            {
                hitPlayer = event.target.id;
                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
            }
            else
            {
                alert('Vous avez déjà tiré a cet endroit !')
            }
        });
        alreadyHitPlayer.push(hitPlayer);

        if(verifBoat(hitPlayer,boatAi) == true)
        {
            touchPlayer.push(hitPlayer);
            document.getElementById("cliquer" + hitPlayer).classList.add("hit");

        }else 
        {
            document.getElementById("cliquer" + hitPlayer).classList.add("miss");
        }
        if (touchAi.length >= 15 || touchPlayer.length >= 15) 
        {
            break;
        }

        // AI TURN

            coup = triche[tricheIndex];
            alreadyHitAi.push(coup);
            touchAi.push(coup);
            document.getElementById(coup).classList("hit");
            tricheIndex ++ ;
    }
}














switch (lvlAi) 
{
    case 0:
        gameLvl0;
        break;
    case 1:
        gameLvl1;
        break;

    case 2:
        gameLvl2;
        break;

    case 3:
        gameLvlDoom;
        break;
}

