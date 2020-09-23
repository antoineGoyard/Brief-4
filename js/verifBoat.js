function verifBoat(x,tab)
{
    
    for (let i = 0; i < tab.length; i++)
     {
        for (let j = 0; j < tab[i].length; j++) 
        {
            if(x == tab[i][j])
            {
                return true;
            }
        };
    };
    return false;
}
