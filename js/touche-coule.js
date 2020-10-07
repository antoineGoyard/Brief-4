function testtableau() {
  for (let i = 0; i < boatAi.length; i++) {
      tabCouleAItest.push(boatAi[i]);
  }
}




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
               return;
            }
        }
        console.log(bateau22);
        console.log(bateau11);
        console.log(bateau33);
        console.log(bateau44);
        console.log(bateau55);
    if (tab == boatAi) {
      switch (tampon) 
      {
        case 0:
          for (let index = 0; index < bateau11.length; index++) {
            document.getElementById("cliquer" + bateau11[index]).classList.remove("hit");
            document.getElementById("cliquer" + bateau11[index]).classList.add("smoke");
          }
          break;
        case 1:
          for (let index = 0; index < bateau22.length; index++) {
            document.getElementById("cliquer" + bateau22[index]).classList.remove("hit");
            document.getElementById("cliquer" + bateau22[index]).classList.add("smoke");
          }
          break;
        case 2:
          for (let index = 0; index < bateau33.length; index++) {
            document.getElementById("cliquer" + bateau33[index]).classList.remove("hit");
            document.getElementById("cliquer" + bateau33[index]).classList.add("smoke");
          }
          break;
        case 3:
          for (let index = 0; index < bateau44.length; index++) {
            document.getElementById("cliquer" + bateau44[index]).classList.remove("hit");
            document.getElementById("cliquer" + bateau44[index]).classList.add("smoke");
          }
          break;
        case 4:
          for (let index = 0; index < bateau55.length; index++) {
            document.getElementById("cliquer" + bateau55[index]).classList.remove("hit");
            document.getElementById("cliquer" + bateau55[index]).classList.add("smoke");
          }
          break;
      }
    }
    tab[tampon] = [];
    if (peupleChoix == 0)
    {
        playVidR();
    }else
    {
        playVidE();
    }
    return;
}
var jouerGuerreSalsifi = document.getElementById("title_game");
var videoOverR = document.getElementById("videoOverlayR");
var overR = document.getElementById("overlayVideoR");
var videoOverE = document.getElementById("videoOverlayE");
var overE = document.getElementById("overlayVideoE");
var loadAI = document.getElementById("overlayAi");
var fake = document.getElementById("fakeDiv");

function playVidR() 
{
    jouerGuerreSalsifi.classList.add("hidden");
    jouerGuerreSalsifi.classList.remove("title_game");

  videoOverR.classList.remove("hidden");
  videoOverR.classList.add("videoOverlayR");
  overR.classList.remove("hidden");
  overR.classList.add("overlayVideoR");
  videoOverR.play();
  setTimeout(() => {
    jouerGuerreSalsifi.classList.remove("hidden");
    jouerGuerreSalsifi.classList.add("title_game");
    jouerGuerreSalsifi.classList.add("title_game");
    videoOverR.classList.add("hidden");
    videoOverR.classList.remove("videoOverlayR");
    overR.classList.add("hidden");
    overR.classList.remove("overlayVideoR");
  }, 4000);
}

function playVidE() 
{
  jouerGuerreSalsifi.classList.add("hidden");
  jouerGuerreSalsifi.classList.remove("title_game");
  videoOverE.classList.remove("hidden");
  videoOverE.classList.add("videoOverlayE");
  overE.classList.remove("hidden");
  overE.classList.add("overlayVideoE");
  videoOverE.play();
  setTimeout(() => {
    jouerGuerreSalsifi.classList.remove("hidden");
    jouerGuerreSalsifi.classList.add("title_game");
    videoOverE.classList.add("hidden");
    videoOverE.classList.remove("videoOverlayE");
    overE.classList.add("hidden");
    overE.classList.remove("overlayVideoE");
  }, 4000);
}



function load()
{
 
  fake.classList.remove("hidden");
  fake.classList.add("fake");
  setTimeout(() =>
   {
    setTimeout(() => {
      loadAI.classList.remove("overlayAi");
      loadAI.classList.add("hidden");
    }, 500);
    fake.classList.add("hidden");
    fake.classList.remove("fake");
    loadAI.classList.add("overlayAi");
    loadAI.classList.remove("hidden");
   
  }, 1000);

}