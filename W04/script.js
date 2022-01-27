//We declare constant variables getting some values from the HTML
const board = document.querySelector('.board');
const resetButton = document.getElementById('resetButton');
const x = 'X';
const o = 'O';

//We declare the variable with the keyword "var". This is important because the value of this variable needs to change.
//We assign it the value of the x variable.
var player = x;

//Function for writing the value of the player variable in the place the user clicks on.
//The target event property returns the element that triggered the event (definition from w3schools).
//We use the innerHTML property to change the content of the element where the user clicks on.
function write(e){
  e.target.innerHTML = player;
}

//Function for change the value of the player variable.
function changePlayer(){
  if (player === x) {
    player = o;
  } 
  else {
    player = x;
  }
}

//Function for handled the whole process.
function touchend(e) {
  write(e);//We write the value of player
  changePlayer()//We change the value of player
}

//Function for clean the board
function resetBoard() {
  //We use the children attribute to get the length of all the elements inside board. 
  //After that we go trough each one of the cells and change the values for a blank space.
  for (let i = 0; i < board.children.length; i++) {
    board.children[i].innerHTML = '';
  }
}

//Event listeners 
board.addEventListener('click', touchend);
resetButton.addEventListener('click', resetBoard);