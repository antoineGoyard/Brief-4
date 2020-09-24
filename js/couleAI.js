/**
 * 
 * @param {array} tab //table containing the affected boat
 */

 //this function returns true if the boat is sunk otherwise false

function coule(tab)
{
    for (let i = 0; i< tab.length; i++)
    {
        if (tab[i] != null) 
        {
            return false 
        }
    }
    return true; 
}