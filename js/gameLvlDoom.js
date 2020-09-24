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

