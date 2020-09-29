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
var loadAi = document.getElementById("overlayAi");

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
    videoOverR.classList.add("hidden");
    videoOverR.classList.remove("videoOverlayR");
    overR.classList.add("hidden");
    overR.classList.remove("overlayVideoR");
  }, 4000);
}

function playVidE() 
{
    jouerGuerreSalsifi.classList.add("hidden");
  videoOverE.classList.remove("hidden");
  videoOverE.classList.add("videoOverlayE");
  overE.classList.remove("hidden");
  overE.classList.add("overlayVideoE");
  videoOverE.play();
  setTimeout(() => {
    jouerGuerreSalsifi.classList.remove("hidden");
    videoOverE.classList.add("hidden");
    videoOverE.classList.remove("videoOverlayE");
    overE.classList.add("hidden");
    overE.classList.remove("overlayVideoE");
  }, 4000);
}



function load()
{
  loadAi.classList.add("overlayAi");
  loadAi.classList.remove("hidden");
 
  setTimeout(() => {
    loadAi.classList.remove("overlayAi");
    loadAi.classList.add("hidden");
  }, 2000);
}