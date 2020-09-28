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

let varaible100 = 1000
for (let u = 0; u < 1; u++) 
{
    let newItemNew = document.createElement('table');
    let letableau = 'letableauinvicibleP1';
    newItemNew.id = (letableau);
    document.getElementById('game_board_main2P1').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) 
    {
        let newItem = document.createElement('tr');
        newItem.classList.add('uneLigneinvicibleP1');
        let ligneID = 'uneLigneinvicibleP1' + i;
        newItem.id = (ligneID);
        document.getElementById('letableauinvicibleP1').appendChild(newItem);


        for (let x = 0; x < 10; x++) 
        {
            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecaseinvicibleP1');
            itemNew.id = (varaible100);
            itemNew.classList.add('player1');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible100++
        }
    }
}

// Grille Player 2

let varaible1000 = 10000

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
            itemNew.id = (varaible1000);
            itemNew.classList.add('player');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible1000++
        }
    }
}
let varaible10000 = 100000

for (let u = 0; u < 1; u++) 
{
    let newItemNew = document.createElement('table');
    let letableau = 'letableauP2invicible';
    newItemNew.id = (letableau);
    document.getElementById('game_board_main2P2').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) 
    {
        let newItem = document.createElement('tr');
        newItem.classList.add('uneLigneP2invicible');
        let ligneID = 'uneLigneP2invicible' + i;
        newItem.id = (ligneID);
        document.getElementById('letableauP2invicible').appendChild(newItem);


        for (let x = 0; x < 10; x++) 
        {
            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecaseP2invicible');
            itemNew.id = (varaible10000);
            itemNew.classList.add('player');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible10000++
        }
    }
}





let idgameP1 = 2000

for (let u = 0; u < 1; u++) 
{
    let newItemNew = document.createElement('table');
    let letableau = 'boardP1';
    newItemNew.id = (letableau);
    document.getElementById('board_for_gameP1').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) 
    {
        let newItem = document.createElement('tr');
        newItem.classList.add('ligneboardP1');
        let ligneID = 'ligneboardP1' + i;
        newItem.id = (ligneID);
        document.getElementById('boardP1').appendChild(newItem);


        for (let x = 0; x < 10; x++) 
        {
            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecaseboardP1');
            itemNew.id = (idgameP1);
            itemNew.classList.add('player');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            idgameP1++
        }
    }
}


let idgameP2 = 3000

for (let u = 0; u < 1; u++) 
{
    let newItemNew = document.createElement('table');
    let letableau = 'boardP2';
    newItemNew.id = (letableau);
    document.getElementById('board_for_gameP2').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) 
    {
        let newItem = document.createElement('tr');
        newItem.classList.add('ligneboardP2');
        let ligneID = 'ligneboardP2' + i;
        newItem.id = (ligneID);
        document.getElementById('boardP2').appendChild(newItem);


        for (let x = 0; x < 10; x++) 
        {
            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecaseboardP2');
            itemNew.id = (idgameP2);
            itemNew.classList.add('player');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            idgameP2++
        }
    }
}