let btnLogin = document.getElementById('btnMenu');
let score = document.getElementById('score');
let pseudoPlayerOne;
let pseudoPlayerTwo;
let inputPseudo = document.getElementById('pseudoInscription');


btnLogin.addEventListener('click', () => {
  console.log("ok");
  pseudoPlayerOne = document.getElementById('pseudoInscription').value;
  localStorage.setItem('pseudoPlayerOne', pseudoPlayerOne);
  validateForm();

  //Option GAME //

  let requestget = new XMLHttpRequest;
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

        y = 1;

        for(x = 0; x < scoring.length; x++)
        {
            console.log(pseudoPlayerOne);
            if(scoring[x].pseudo == pseudoPlayerOne)
            {
              console.log('YO');
                if(y <= 10)
                {
                  let couf = 'scorePerso' + y;
                  console.log(couf);
                    document.getElementById(couf).append(scoring[x].pseudo + '   ' + scoring[x].score +' Pts');
                    y++;
                }
            }
        }
    }


    
}
requestget.open("GET", "php/score.json", true);
requestget.send();




});

inputPseudo.addEventListener('keypress', () => {

  var e = window.event || e;
  var touche = e.charCode || e.keyCode;
  if (touche == 13) {
    e.preventDefault();

    pseudoPlayerOne = document.getElementById('pseudoInscription').value;
    localStorage.setItem('pseudoPlayerOne', pseudoPlayerOne);
    console.log("ca marche");
    validateForm();
    // sectionMenu.classList.remove('hidden');
    // sectionPseudo.classList.add('hidden');
    // sectionOption.classList.add('hidden');
    // sectionScore.classList.add('hidden');
    // sectionMulti.classList.add('hidden');
    console.log('Click Btn Menu');
  }
})

function validateForm() {
  let x = document.forms["logginForm"]["pseudo"].value;
  console.log(x);
  console.log("test");
  if (x == "") {
    alert("Veuillez indiquer un pseudo pour jouer!");
    return false;
  }
  else {
    sectionMenu.classList.remove('hidden');
    sectionOption.classList.add('hidden');
    sectionScore.classList.add('hidden');
    sectionPseudo.classList.add('hidden');
    sectionMulti.classList.add('hidden');
    document.getElementById('PlayerOneDuo').value = x;
    console.log('Click Btn Menu');
  }
}

document.getElementById('btnJouerDuo').addEventListener('click', () => {
  let pseudoPlayerTwo = document.getElementById('pseudoPlayerTwo').value;
  localStorage.setItem('pseudoPlayerTwo', pseudoPlayerTwo);
  let pseudoPlayerOneDUO = document.getElementById('PlayerOneDuo').value;
  localStorage.setItem('pseudoPlayerOne', pseudoPlayerOneDUO);
  console.log(pseudoPlayerOneDUO);
  console.log(pseudoPlayerTwo);
  //alert('choup');
  if (pseudoPlayerTwo == pseudoPlayerOneDUO) {
    alert("Veuillez indiquer un  pseudo différent!");
  }
  else if (pseudoPlayerOneDUO == "") {
    alert("Player 1 veuillez indiquer un pseudo valide pour jouer!")
  }
  else if (pseudoPlayerTwo == "") {
    alert("Player 2 veuillez indiquer un pseudo valide pour jouer!")
  }
  else {
    window.location = "modeDuo.html";
  }

  console.log('Click Btn Jouer Duo');

  console.log("adjugé");
 
  //verifPseudoDuo(pseudoPlayerOne, pseudoPlayerTwo);
})


/*function validateFormDuo() {
  console.log("ca passe");
  let y = document.forms["formDuo"]["pseudo2"].value;
  if (y == "") {
    alert("Veuillez indiquer un pseudo pour jouer!");
    return false;
  }
   if (x == y){
     alert("Veuillez indiquer un autre pseudo!");
     return false;
   }
  else {

    

  }
}*/

function verifPseudoDuo(pseudoP1, pseudoP2) {
  if (pseudoP1.value === pseudoP2.value) {
    alert("Veuillez indiquer un  pseudo différent!");
  }
  else if (pseudoP1.value == "") {
    alert("Player 1 veuillez indiquer un pseudo valide pour jouer!")
  }
  else if (pseudoP2.value == "") {
    alert("Player 2 veuillez indiquer un pseudo valide pour jouer!")
  }
  else {
    alert('sa devais être bon')
    window.location = "modeDuo.html";
  }

}
