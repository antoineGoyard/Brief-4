let nmbdraggable = 0 ;

let fillies = document.querySelectorAll('.draggable');
let empties = document.querySelectorAll('.droppable');


//Fill Listeners 
for(let fill of fillies)
{
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
}

//Loop through empties
for(let empty of empties)
{
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart()
{
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd()
{
  this.className = 'fill';
}

function dragOver(e)
{
  e.preventDefault();
}

function dragEnter(e)
{
  e.preventDefault();
  //this.className += ' hovered';
}

function dragLeave()
{
  
}

function dragDrop()
{
  this.className = 'empty';
  this.append(fill);
  
  nmbdraggable++
  console.log(event.target.id);
  bateau1 = event.target.id;
}
console.log(bateau1);
var bateau1;

btn1.addEventListener('click', () =>{
    console.log(bateau1);
    addtab();
    console.log(bat1)
})

var boat = [];
var bat1 = [];

function addtab()
{
    let position1 = bateau1 - 1000;
    let position2 = position1 + 10;
    let position3 = position2 + 10;
    let position4 = position3 + 10;

    bateau1 = [position1, position2, position3, position4];
    bat1 =[bateau1]

    console.log(bat1);
    console.log(position1);
    console.log(position2);
    console.log(position3);
    console.log(position4);
}

console.log(bat1)