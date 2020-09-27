
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
                verifCoule(boatPlayer, (touchAi[touchAi.length-1]+1));
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
                    verifCoule(boatPlayer, (touchAi[touchAi.length-1]-1));
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
                    verifCoule(boatPlayer, (touchAi[touchAi.length-1]+10));
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
                        verifCoule(boatPlayer, (touchAi[touchAi.length-1]-10));
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
                    verifCoule(boatPlayer,coup);
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
