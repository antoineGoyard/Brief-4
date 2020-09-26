function winner()
{
    document.getElementById('game_board_ia').classList.add('hidden');
    document.getElementById('nomovegame').classList.add('hidden');
    document.getElementById('title_game').classList.add('hidden');
    document.getElementById('score').classList.add('hidden');
    document.getElementById('placementGeneral').classList.add('hidden');
    document.getElementById('sectionVictoireSolo').classList.remove('hidden');
}

function defeat()
{
    document.getElementById('game_board_ia').classList.add('hidden');
    document.getElementById('nomovegame').classList.add('hidden');
    document.getElementById('title_game').classList.add('hidden');
    document.getElementById('score').classList.add('hidden');
    document.getElementById('placementGeneral').classList.add('hidden');
    document.getElementById('sectionGameOver').classList.remove('hidden');
}