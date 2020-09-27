function verifCoule(tab,x) 
{
    let tampon;
    for (let i = 0; i < tab.length; i++)
    {
       for (let j = 0; j < tab[i].length; j++) 
       {
           if(x == tab[i][j])
           {
               tab[i][j] = null;
               tampon = i;
           }
       }
    }

        for ( j = 0; j < tab[tampon].length; j++) 
        {
            if(tab[tampon][j] != null)
            {
                alert("touché");
               return;
            }
        }
    tab[tampon] = [];
    alert("touché coulé");
    return;
}
