function gameLvl1() {
    score = 0;
    bonus = 1;
    document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
    {
        actualTurn++;

// PLAYER TURN //

            //console.log(event.target.id);
            if (event.target.id < 4000) 
            { 
                if (people == 'republique') 
                {
                    peupleChoix = 0;
                }else
                {
                    peupleChoix = 1;
                }

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
                    bonus +=1;
                    score += (150*bonus);
                    touchPlayer.push(hitPlayer);
                    document.getElementById("cliquer" + hitPlayer).classList.add("carreExplosion");
                    setTimeout(() => {
                        document.getElementById("cliquer" + hitPlayer).classList.add("hit");
                        document.getElementById("cliquer" + hitPlayer).classList.remove("carreExplosion");

                    }, 2000);
                    verifCoule(boatAi,verif); 
                   
                } else 
                {
                    bonus = 1;
                    document.getElementById("cliquer" + hitPlayer).classList.add("miss");
                }
                if (touchPlayer.length == 17) 
                {
                    //console.log('Victoire Player');
                    winner();
                }

// AI TURN //
            //AI

            load();
            setTimeout(() => {
                
            if (people == 'republique') 
            {
                peupleChoix = 1;
            }else
            {
                peupleChoix = 0;
            }

            if (verifAround == true) {
                findNext();
            } else {
                if (verifBoat(actionAi(alreadyHitAi), boatPlayer) == true) {
                    verifAround = true;
                    verifCoule(boatPlayer,coup);
                    alreadyHitAi.push(coup);
                    touchAi.push(coup);
                    document.getElementById(coup).classList.add("hit");
                } else {
                    alreadyHitAi.push(coup);
                   // console.log(coup);
                    document.getElementById(coup).classList.add("miss");
                }
            }
            if (touchAi.length == 17) {
                console.log('Victoire Player');
                defeat();
            }

            //console.log(alreadyHitAi);
        }, 4000);
        }
        else {
            alert('Vous avez déjà tiré a cet endroit !')
        }




    });
}
