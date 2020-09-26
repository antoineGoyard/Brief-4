function gameLvl0() {

    document.getElementById('game_board_ia').addEventListener('click', (event) => //detects where the player clicked and returns the cell id
    {
        actualTurn++;
      
        
            console.log(event.target.id);
            if (event.target.id < 4000) {
                
                hitPlayer = event.target.id;

                document.getElementById(hitPlayer).id = "cliquer" + hitPlayer;
                console.log(hitPlayer);
                
                
                
                alreadyHitPlayer.push(hitPlayer);
                let verif = hitPlayer - 3000;
                console.log(verif);
                //console.log(boatAi);
                console.log(verifBoat(verif, boatAi));

                if (verifBoat(verif, boatAi) == true) {
                    touchPlayer.push(hitPlayer);
                    document.getElementById("cliquer" + hitPlayer).classList.add("hit");

                }
                 else {
                    document.getElementById("cliquer" + hitPlayer).classList.add("miss");
                }

                if (touchPlayer.length == 17) {
                    console.log('Victoire Player');
                    alert('Victoire Player')
                }

                coup = 0;
                console.log(alreadyHitAi);
                if (verifBoat(actionAi(alreadyHitAi), boatPlayer) == true) {
                    alreadyHitAi.push(coup);
                    touchAi.push(coup);
                    document.getElementById(coup).classList.add("hit");
                } else {
                    alreadyHitAi.push(coup);
                    console.log(coup);
                    document.getElementById(coup).classList.add("miss");
                }
                if (touchAi.length == 17) {
                    console.log('Victoire IA');
                    alert('Victoire IA')
                }
                
                console.log(alreadyHitAi);
            }
            else {
                alert('Vous avez déjà tiré a cet endroit !')
            }



        
    });

}