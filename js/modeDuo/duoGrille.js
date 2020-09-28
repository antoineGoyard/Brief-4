// Grille Player 1 

let varaible1 = 0

for (let u = 0; u < 1; u++) 
{
    let newItemNew = document.createElement('table');
    let letableau = 'letableau';
    newItemNew.id = (letableau);
    document.getElementById('game_board_mainP1').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) 
    {
        let newItem = document.createElement('tr');
        newItem.classList.add('uneLigne');
        let ligneID = 'uneLigne' + i;
        newItem.id = (ligneID);
        document.getElementById('letableau').appendChild(newItem);


        for (let x = 0; x < 10; x++) 
        {
            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecase');
            itemNew.id = (varaible1);
            itemNew.classList.add('player');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible1++
        }
    }
}

// Grille Player 2

let varaible10 = 1000

for (let u = 0; u < 1; u++) 
{
    let newItemNew = document.createElement('table');
    let letableau = 'letableauP2';
    newItemNew.id = (letableau);
    document.getElementById('game_board_mainP2').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) 
    {
        let newItem = document.createElement('tr');
        newItem.classList.add('uneLigneP2');
        let ligneID = 'uneLigneP2' + i;
        newItem.id = (ligneID);
        document.getElementById('letableauP2').appendChild(newItem);


        for (let x = 0; x < 10; x++) 
        {
            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecaseP2');
            itemNew.id = (varaible10);
            itemNew.classList.add('player');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible1++
        }
    }
}