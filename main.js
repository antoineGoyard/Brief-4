
/**
 * gameLvl0 is the first of the four functions that allow you to play.
 *  It includes a large part of the functions created in the other files .js
 *  She has a basic AI that plays her moves only randomly
 */

////////////////////////////////////////////////////////////////////

//let around = null;
let touch1Time=[];
let verifAround = false;
let verifFindNext = [];
let touchAi = [];
let alreadyHitAi = [];
let coup;
let actualTurn = 0;
let touchPlayer = [];
let alreadyHitPlayer = [];
let hitPlayer = 0; // is the number of the box chosen by the player

//////////////////////////////////////////////////////////////////

function gameLvl0() {
    
    document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
    {
        actualTurn++;
        if (touchAi.length == 17) 
        {
            console.log('Victoire IA');
            alert('Victoire IA')
        }
        else if (touchPlayer.length == 17) 
        {
            console.log('Victoire Player');
            alert('Victoire Player')
        }
        else {
            console.log(event.target.id);
            if (event.target.id < 4000) 
            {
                hitPlayer = event.target.id;
                
                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
                console.log(hitPlayer);
                
            }
            else {
                alert('Vous avez déjà tiré a cet endroit !')
            }

            alreadyHitPlayer.push(hitPlayer);
            let verif = hitPlayer - 3000;
            console.log(verif);
            //console.log(boatAi);
            console.log(verifBoat(verif, boatAi));

            if (verifBoat(verif, boatAi) == true) 
            {
                touchPlayer.push(hitPlayer);
                document.getElementById("cliquer" + hitPlayer).classList.add("hit");

            } else {
                document.getElementById("cliquer" + hitPlayer).classList.add("miss");
            }
            coup=0;
            console.log(alreadyHitAi);
            if (verifBoat(actionAi(alreadyHitAi), boatPlayer) == true) 
            {
                alreadyHitAi.push(coup);
                touchAi.push(coup);
                document.getElementById(coup).classList.add("hit");
            } else {
                alreadyHitAi.push(coup);
                console.log(coup);
                document.getElementById(coup).classList.add("miss");
            }
            console.log(alreadyHitAi);

        }
    });

}

/**
 * gameLvl0 is the first of the four functions that allow you to play.
 *  It includes a large part of the functions created in the other files .js
 *  She has a basic AI that plays her moves only randomly
 */


function gameLvl1() 
{
    document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
    {
        actualTurn++;
        if (touchAi.length == 17) 
        {
            console.log('Victoire IA');
            alert('Victoire IA')
        }
        else if (touchPlayer.length == 17) 
        {
            console.log('Victoire Player');
            alert('Victoire Player')
        }
        else {
            console.log(event.target.id);
            if (event.target.id < 4000) 
            {
                hitPlayer = event.target.id;
                
                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
                console.log(hitPlayer);
                
            }
            else {
                alert('Vous avez déjà tiré a cet endroit !')
            }

            alreadyHitPlayer.push(hitPlayer);
            let verif = hitPlayer - 3000;
            console.log(verif);
            //console.log(boatAi);
            console.log(verifBoat(verif, boatAi));

            if (verifBoat(verif, boatAi) == true) 
            {
                touchPlayer.push(hitPlayer);
                document.getElementById("cliquer" + hitPlayer).classList.add("hit");

            } else {
                document.getElementById("cliquer" + hitPlayer).classList.add("miss");
            }
            //AI

            if (verifAround == true)
            {
                findNext();
            }else
            {
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
            }
            
            console.log(alreadyHitAi);

        }
    });
}

/**
 * gameLvl0 is the first of the four functions that allow you to play.
 *  It includes a large part of the functions created in the other files .js
 *  She has a basic AI that plays her moves only randomly
 */



function gameLvl2() 
{
    document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
    {
        actualTurn++;
        if (touchAi.length == 17) 
        {
            console.log('Victoire IA');
            alert('Victoire IA')
        }
        else if (touchPlayer.length == 17) 
        {
            console.log('Victoire Player');
            alert('Victoire Player')
        }
        else {
            console.log(event.target.id);
            if (event.target.id < 4000) 
            {
                hitPlayer = event.target.id;
                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
                console.log(hitPlayer);
                
            }
            else {
                alert('Vous avez déjà tiré a cet endroit !')
            }

            alreadyHitPlayer.push(hitPlayer);
            let verif = hitPlayer - 3000;
            console.log(verif);
            //console.log(boatAi);
            console.log(verifBoat(verif, boatAi));

            if (verifBoat(verif, boatAi) == true) 
            {
                touchPlayer.push(hitPlayer);
                document.getElementById("cliquer" + hitPlayer).classList.add("hit");

            } else {
                document.getElementById("cliquer" + hitPlayer).classList.add("miss");
            }
            //AI

            if (touch1Time != [])
            {
                iKillYou();
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
            }
            console.log(alreadyHitAi);
        }
    });
}


/**
 * gameLvl0 is the first of the four functions that allow you to play.
 *  It includes a large part of the functions created in the other files .js
 *  She has a basic AI that plays her moves only randomly
 */

function gameLvlDoom() 
{

    let indexDoom =  0;
    let tabDoom = [];
    
    for (let i = 0; i < boatPlayer.length; i++)
    {
        for (let j = 0; j < boatPlayer[i].length; j++) 
        {
            tabDoom.push(boatPlayer[i][j]);
        }
    }

    document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
    {
        actualTurn++;
        if (touchAi.length == 17) 
        {
            console.log('Victoire IA');
            alert('Victoire IA')
        }
        else if (touchPlayer.length == 17) 
        {
            console.log('Victoire Player');
            alert('Victoire Player')
        }
        else 
        {
            console.log(event.target.id);
            if (event.target.id < 4000) 
            {
                hitPlayer = event.target.id;
                
                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
                console.log(hitPlayer);
                
            }
            else {
                alert('Vous avez déjà tiré a cet endroit !')
            }

            alreadyHitPlayer.push(hitPlayer);
            let verif = hitPlayer - 3000;
            console.log(verif);
            //console.log(boatAi);
            console.log(verifBoat(verif, boatAi));

            if (verifBoat(verif, boatAi) == true) 
            {
                touchPlayer.push(hitPlayer);
                document.getElementById("cliquer" + hitPlayer).classList.add("hit");

            } else {
                document.getElementById("cliquer" + hitPlayer).classList.add("miss");
            }

            console.log(alreadyHitAi);

            // Ai 
            if (verifBoat(tabDoom[indexDoom], boatPlayer) == true) 
            {
                coup = tabDoom[indexDoom];
                alreadyHitAi.push(coup);
                touchAi.push(coup);
                document.getElementById(coup).classList.add("hit");
                indexDoom ++;
            } else {
                alreadyHitAi.push(coup);
                console.log(coup);
                document.getElementById(coup).classList.add("miss");
            }
            console.log(alreadyHitAi);  
        }
    });
}














/*switch (lvlAi)
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
}*/
