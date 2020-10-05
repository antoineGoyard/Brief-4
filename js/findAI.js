
// this function is the main function for the operation of the AI gameLvl2

function iKillYou() 
{
    if (touch1Time.length!=[])
    {
        for (let i = 0; i < touch1Time.length; i++) 
        {
            if(touch1Time[i] != null)
            {
                verifCoule(boatPlayer,touch1Time[i]);
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
        touch1Time = [];
        if (verifBoat(actionAi(alreadyHitAi), boatPlayer) == true) 
        {
            toucheRecupTab(boatPlayer, touch1Time, coup);
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