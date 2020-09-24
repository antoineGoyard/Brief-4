

 btnJouerSolo.addEventListener('click',()=>{

var lvl1 = document.getElementById('easy').checked;
var lvl2 = document.getElementById('medium').checked;
var lvl3 = document.getElementById('difficult').checked;
var lvl4 = document.getElementById('doom').checked;

var people1 = document.getElementById('republique').checked;
var people2 = document.getElementById('empire').checked;

var difficult;
var people;

console.log(lvl1);
console.log(lvl2);
console.log(lvl3);
console.log(lvl4);

console.log(people1);
console.log(people2);

    if(lvl1 == true)
    {
       localStorage.setItem("difficult", '0');
    }
    else if(lvl2 == true)
    {
        localStorage.setItem("difficult", '1');
    }
    else if(lvl3 == true)
    {
        localStorage.setItem("difficult", '2');
    }
    else if(lvl4 == true)
    {
        localStorage.setItem("difficult", '3');
    }
    else
    {
        alert("Il n'y a pas de difficultés selectionner");
    }



    if(people1 == true)
    {
        localStorage.setItem("people", 'republique');
    }
    else if(people2 == true)
    {
        localStorage.setItem("people", 'empire');
    }
    else
    {
        alert('Pas de peuples choisie :(');
    }

        
     window.location = "gameSolo.html";
 })