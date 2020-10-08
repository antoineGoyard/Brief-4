function winner() {
    document.getElementById('game_board_ia').classList.add('hidden');
    document.getElementById('nomovegame').classList.add('hidden');
    document.getElementById('title_game').classList.add('hidden');
    document.getElementById('score').classList.add('hidden');
    document.getElementById('placementGeneral').classList.add('hidden');
    document.getElementById('sectionVictoireSolo').classList.remove('hidden');
    document.getElementById('scorePlayer').innerText = "Votre score: " + score;

    var pouet1 = new FormData();
    pouet1.append("score", score);
    pouet1.append("pseudo", pseudoPlayerOne);


    let request = new XMLHttpRequest();
    request.open("POST", "./php/json.php", true);
    request.send(pouet1);
}

function defeat() {
    document.getElementById('game_board_ia').classList.add('hidden');
    document.getElementById('nomovegame').classList.add('hidden');
    document.getElementById('title_game').classList.add('hidden');
    document.getElementById('score').classList.add('hidden');
    document.getElementById('placementGeneral').classList.add('hidden');
    document.getElementById('sectionGameOver').classList.remove('hidden');
}