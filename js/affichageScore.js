/*let requestget = new XMLHttpRequest;
requestget.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var scoring = JSON.parse(this.responseText);

        console.log(scoring);
        //number++;
       scoring.sort(function (a, b) {
            return b.score - a.score;
        });
        console.log(scoring);
       document.getElementById('score1').append(scoring[0].pseudo + '   ' + scoring[0].score +' Pts');
       document.getElementById('score2').append(scoring[1].pseudo + '   ' + scoring[1].score +' Pts');
       document.getElementById('score3').append(scoring[2].pseudo + '   ' + scoring[2].score +' Pts');
       document.getElementById('score4').append(scoring[3].pseudo + '   ' + scoring[3].score +' Pts');
       document.getElementById('score5').append(scoring[4].pseudo + '   ' + scoring[4].score +' Pts');
       document.getElementById('score6').append(scoring[5].pseudo + '   ' + scoring[5].score +' Pts');
       document.getElementById('score7').append(scoring[6].pseudo + '   ' + scoring[6].score +' Pts');
       document.getElementById('score8').append(scoring[7].pseudo + '   ' + scoring[7].score +' Pts');
       document.getElementById('score9').append(scoring[8].pseudo + '   ' + scoring[8].score +' Pts');
       document.getElementById('score10').append(scoring[9].pseudo + '   ' + scoring[9].score +' Pts');

        y = 0;

        for(x = 0; x < scoring.length; x++)
        {
            console.log(pseudoPlayerOne);
            if(scoring[x].pseudo == pseudoPlayerOne)
            {
                if(y <= 10)
                {
                    document.getElementById('scorePerso' + y).append(scoring[x].pseudo + '   ' + scoring[x].score +' Pts');
                    y++;
                }
            }
        }
    }


    
}
requestget.open("GET", "php/score.json", true);
requestget.send();*/