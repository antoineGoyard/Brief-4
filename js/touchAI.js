/**
 * 
 * @param {array} tab //player's boat board
 * @param {array} tab1 //recovery table of the affected boat
 * @param {number} x // AI shot
 */

 //this function is used to operate the AI level 3. 
 //It allows in the event of a hit on a player's boat 
 //to recover the coordinates of this one.

function toucheRecupTab(tab,tab1,x) 
{
    for (let i = 0; i < tab.length; i++) 
    {
        for (let j = 0; j < tab[i].length; j++)
        {
            if (tab[i][j]==x) 
            {
                tab[i][j] = null;
                for (let k = 0; k < tab[i].length; k++) 
                {
                   tab1.push(tab[i][k]);
                } 
            }
        }
    }
}