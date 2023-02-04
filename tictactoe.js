// store gameboard as an array in side of gameboard object
// 4 main objects: Gameboard, Player 1, Player 2,
// and control flow of game
// have as little global code as possible.
// when you need multiples of something, create factories
// when you need 1 of something, create modules
// write a javascript function that renders the contents of the
// gameboard array to the webpage.
// build functions that allows players to mark specific spots
// tie the spots to the DOM, letting players click on gameboard to
// mark. Once a spot is taken cannot be marked.
// check for when game is over, check for 3 in a row.
// interface: allow players to put their name, 2 buttons
// start and restart. and a display to congratulate winner.

// function factory creates objects as new players
function newPlayer(name, symbol) {
  return {
    name: `${name}`,
    symbol: `${symbol}`
  };
}
// input player name and on enter stores the name and symbol
const me = newPlayer("brian", "x");
const you = newPlayer("joe", "o");

console.log(me);
console.log(you);

// create a function that represents the gameboard with an array
function gameboard(input, input2) {
  // create board
  const board = [
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2]
  ];
  // displays gameboard over webpage
}

function displayBoard() {
  // diplsay a 3x3 grid
  // each box represents a section of the board array
  const node = document.getElementById("game");
  node.querySelectorAll("*").forEach((n) => n.remove());
  const box = document.getElementById("game");
  const num = 3;
  for (let i = 0; i < num * num; i += 1) {
    const row = document.createElement("div");
    box.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    box.appendChild(row).classList.add(`box${i}`);
    // add function that makes the box an object that represents board
  }
}
