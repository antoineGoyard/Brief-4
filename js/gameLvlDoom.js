function gameLvlDoom() {
    score = 0;

    let indexDoom = 0;
    let tabDoom = [];

    for (let i = 0; i < boatPlayer.length; i++) {
        for (let j = 0; j < boatPlayer[i].length; j++) {
            tabDoom.push(boatPlayer[i][j]);
        }
    }

    document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
    {
        actualTurn++;
        
// PLAYER TURN //
            if (people == 'republique') 
            {
                peupleChoix = 0;
            }else
            {
                peupleChoix = 1;
            }


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
                    touchPlayer.push(hitPlayer);
                    document.getElementById("cliquer" + hitPlayer).classList.add("carreExplosion");
                    setTimeout(() => {
                        document.getElementById("cliquer" + hitPlayer).classList.add("hit");
                        document.getElementById("cliquer" + hitPlayer).classList.remove("carreExplosion");

                    }, 1500);
                    verifCoule(boatAi,verif); 
                } else 
                {
                    document.getElementById("cliquer" + hitPlayer).classList.add("miss");
                }
                if (touchPlayer.length == 17) 
                {
                    score = 999999;
                    //console.log('Victoire Player');
                    winner();
                }

// AI TURN //
            
            load();
            setTimeout(() => {
                
            //console.log(alreadyHitAi);
            if (people == 'republique') 
            {
                peupleChoix = 1;
            }else
            {
                peupleChoix = 0;
            }

            // Ai 
            if (verifBoat(tabDoom[indexDoom], boatPlayer) == true) {
                coup = tabDoom[indexDoom];
                verifCoule(boatPlayer,coup);
                alreadyHitAi.push(coup);
                touchAi.push(coup);
                document.getElementById(coup).classList.add("hit");
                indexDoom++;
            } else {
                alreadyHitAi.push(coup);
                //console.log(coup);
                document.getElementById(coup).classList.add("miss");
            }

            if (touchAi.length == 17) {
               // console.log('Victoire IA');
                defeat();
            }
        }, 1500);
        }
        else {
            alert('Vous avez déjà tiré a cet endroit !')
        }


        console.log(alreadyHitAi);

    });
}


