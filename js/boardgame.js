
// Création des tableaux de jeux.
// Le premier tableau sers a récupérer l'id

let varaible1 = 0

for (let u = 0; u < 1; u++) 
{
    let newItemNew = document.createElement('table');
    let letableau = 'letableau';
    newItemNew.id = (letableau);
    document.getElementById('game_board_main').appendChild(newItemNew);

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
            itemNew.classList.add('droppable');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible1++
        }
    }
}
// Tableau de placement des bateaux
let varaible10 = 1000

for (let u = 0; u < 1; u++) 
{
    let newItemNew = document.createElement('table');
    let letableau = 'letableauvisible';
    newItemNew.id = (letableau);
    document.getElementById('game_board_main2').appendChild(newItemNew);

    for (let i = 0; i < 10; i++) 
    {
        let newItem = document.createElement('tr');
        newItem.classList.add('uneLigne');
        let ligneID = 'uneLigneinvisible' + i;
        newItem.id = (ligneID);
        document.getElementById('letableauvisible').appendChild(newItem);


        for (let x = 0; x < 10; x++) 
        {
            let itemNew = document.createElement('td');
            itemNew.classList.add('battlecaseinvisible');
            itemNew.id = (varaible10);
            itemNew.classList.add('player');
            itemNew.classList.add('dropper');
            document.getElementById(ligneID).appendChild(itemNew);
            varaible10++
        }
    }
}
// Tableau qui servira pour trouver les bateaux de l'ia
let varaible100 = 3000

for (let u = 0; u < 1; u++) 
{
    let newItemia = document.createElement('table');
    let letableauia = 'letableauia';
    newItemia.id = (letableauia);
    document.getElementById('game_board_ia').appendChild(newItemia);
    document.getElementById('game_board_ia').classList.add('hidden');

    for (let i = 0; i < 10; i++) 
    {
        let newItemia = document.createElement('tr');
        newItemia.classList.add('uneLigneia');
        let ligneID = 'uneLigneia' + i;
        newItemia.id = (ligneID);
        document.getElementById('letableauia').appendChild(newItemia);


        for (let x = 0; x < 10; x++) 
        {
            let itemNewia = document.createElement('td');
            itemNewia.classList.add('battlecaseIA');
            itemNewia.id = (varaible100);
            document.getElementById(ligneID).appendChild(itemNewia);
            varaible100++
        }
    }
}