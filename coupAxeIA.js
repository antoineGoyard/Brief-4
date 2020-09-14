
let prochainCoup;

// REJOUE SUR LE BON AXE 
function axe(x)
 {
     dernierDC = x[x.length-1]; //dernier coup réussi 
     dernierADC = x[x.length-2]; //avant dernier coup réussi 

    if(x.length >=2 && x.length < 5)
    {
        if ((dernierDC-dernierADC) == -10)
        {
            if ((dernierDC==0)||(dernierDC==1)||(dernierDC==2)||(dernierDC==3)||(dernierDC==4)||(dernierDC==5)||(dernierDC==6)||(dernierDC==7)||(dernierDC==8)||(dernierDC==9))
            {
                prochainCoup = x[0]+10;
                return prochainCoup;
            }else
            {
                prochainCoup= dernierDC-10;
                return prochainCoup;
            }
        }
        if ((dernierDC-dernierADC) == 10)
        {
            if ((dernierDC==90)||(dernierDC==91)||(dernierDC==92)||(dernierDC==93)||(dernierDC==94)||(dernierDC==95)||(dernierDC==96)||(dernierDC==97)||(dernierDC==98)||(dernierDC==99))
            {
                prochainCoup = x[0]-10;
                return prochainCoup;
            }else
            {
                prochainCoup= dernierDC+10;
                return prochainCoup;
            }
        }
        if ((dernierDC-dernierADC) == -1)
         {
            if ((dernierDC==0)||(dernierDC==10)||(dernierDC==20)||(dernierDC==30)||(dernierDC==40)||(dernierDC==50)||(dernierDC==60)||(dernierDC==70)||(dernierDC==80)||(dernierDC==90))
            {
                prochainCoup = x[0]+1;
                return prochainCoup;
            }else
            {
                prochainCoup= dernierDC-1;
                return prochainCoup;  
            }
        }
        if ((dernierDC-dernierADC) == 1)
        {
            if ((dernierDC==9)||(dernierDC==19)||(dernierDC==29)||(dernierDC==39)||(dernierDC==49)||(dernierDC==59)||(dernierDC==69)||(dernierDC==79)||(dernierDC==89)||(dernierDC==99))
            {
                prochainCoup = x[0]-1;
                return prochainCoup;
            }else
            {
                prochainCoup= dernierDC+1;
                return prochainCoup;
                
            }
        }
    }
}

// X = COUP D'AFFILER RÉUSSIS 
function opAxe(x) 
{
    if (x.length >= 3 && test(x[lentgth-1],joueurTab)==false)
    {
        if ((dernierDC-dernierADC) == -10)
        {
            prochainCoup = x[0]+10;
        }
        if ((dernierDC-dernierADC) == 10)
        {
            prochainCoup = x[0]-10;
        }
        if ((dernierDC-dernierADC) == -1)
        {
            prochainCoup = x[0]+1;
        }
        if ((dernierDC-dernierADC) == 1)
        {
            prochainCoup = x[0]-1;
        }
    }
    return prochainCoup;
}
