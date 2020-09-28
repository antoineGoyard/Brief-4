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
    playVid();
    return;
}

var videoOver = document.getElementById("videoOverlay");
var over = document.getElementById("overlayVideo");

function playVid() 
{
  videoOver.classList.remove("hidden");
  videoOver.classList.add("videoOverlay");
  over.classList.remove("hidden");
  over.classList.add("overlayVideo");
  videoOver.play();
  setTimeout(() => {
    videoOver.classList.add("hidden");
    videoOver.classList.remove("videoOverlay");
    over.classList.add("hidden");
    over.classList.remove("overlayVideo");
  }, 4000);
}



