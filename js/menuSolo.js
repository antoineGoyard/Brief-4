

 btnJouerSolo.addEventListener('click',()=>{

var lvl1 = document.getElementById('easy').checked;
var lvl2 = document.getElementById('medium').checked;
var lvl3 = document.getElementById('difficult').checked;
var lvl4 = document.getElementById('doom').checked;

var people1 = document.getElementById('republique').checked;
var people2 = document.getElementById('empire').checked;

console.log(lvl1);
console.log(lvl2);
console.log(lvl3);
console.log(lvl4);

console.log(people1);
console.log(people2);

    if(lvl1 == true)
    {
        console.log('lvl1');
    }
    else if(lvl2 == true)
    {
        console.log('lvl2');
    }
    else if(lvl3 == true)
    {
        console.log('lvl3');
    }
    else if(lvl4 == true)
    {
        console.log('lvl4');
    }
    else
    {
        alert("Il n'y a pas de difficultés selectionner");
    }

        
     //window.location = /*"gameSolo.html"*/;
 })