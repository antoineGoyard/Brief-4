function gameLvl1() {
    document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
    {
        actualTurn++;

// PLAYER TURN //

            //console.log(event.target.id);
            if (event.target.id < 4000) 
            { 
                hitPlayer = event.target.id;
                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
                //console.log(hitPlayer);
                alreadyHitPlayer.push(hitPlayer);
                let verif = hitPlayer - 3000;
                //console.log(verif);
                //console.log(boatAi);
                //console.log(verifBoat(verif, boatAi)); 
                if (verifBoat(verif, boatAi) == true) 
                {
                   console.log(verif);
                   console.log(boatAi);
                    touchPlayer.push(hitPlayer);
                    document.getElementById("cliquer" + hitPlayer).classList.add("hit");
                    verifCoule(boatAi,verif); 
                    console.log(verif);
                    console.log(boatAi);
                } else 
                {
                    document.getElementById("cliquer" + hitPlayer).classList.add("miss");
                }
                if (touchPlayer.length == 17) 
                {
                    //console.log('Victoire Player');
                    winner();
                }

// AI TURN //
            //AI

            if (verifAround == true) {
                findNext();
            } else {
                if (verifBoat(actionAi(alreadyHitAi), boatPlayer) == true) {
                    verifAround = true;
                    alreadyHitAi.push(coup);
                    touchAi.push(coup);
                    document.getElementById(coup).classList.add("hit");
                } else {
                    alreadyHitAi.push(coup);
                    console.log(coup);
                    document.getElementById(coup).classList.add("miss");
                }
            }
            if (touchAi.length == 17) {
                console.log('Victoire Player');
                defeat();
            }

            console.log(alreadyHitAi);
        }
        else {
            alert('Vous avez déjà tiré a cet endroit !')
        }




    });
}
