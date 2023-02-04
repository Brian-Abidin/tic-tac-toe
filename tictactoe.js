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
function newPlayer() {
  const pname = document.getElementById("player1").value;
  const pname2 = document.getElementById("player2").value;

  const player1 = {
    name: pname,
    symbol: "x"
  };
  const player2 = {
    name: pname2,
    symbol: "o"
  };
  return {
    player1,
    player2
    // name: `${name}`
    // symbol: `${symbol}`
  };
}

document.getElementById("enter").addEventListener("click", newPlayer);
document.getElementById("enter2").addEventListener("click", newPlayer);

// function updatePlayer() {
//   const player1 = newPlayer(document.getElementById("player1").value);
//   console.log(player1);
//   const player2 = newPlayer(document.getElementById("player2").value);
//   console.log(player2);
// }

console.log(newPlayer().player1);
// input player name and on enter stores the name and symbol

// console.log(p1name);
// console.log(you);

// create a function that represents the gameboard with an array
function gameboard(input, input2) {
  // create board
  const game = {
    board: [
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2]
    ]
  };

  console.log(game.board[1][2]);
  // displays gameboard over webpage
}

// gameboard module
const gameBoard = (() => {
  // first function clear
  const clear = () => {
    console.log(newPlayer().player1);
    console.log(newPlayer().player2);
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
  };
  // return functions
  return {
    clear
  };
})();

// gameboard controller module
const gameController = (() => {
  const game = {
    board: [
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2]
    ]
  };

  console.log(game.board[1][2]);
})();

// function displayBoard() {
//   // diplsay a 3x3 grid
//   // each box represents a section of the board array
//   const node = document.getElementById("game");
//   node.querySelectorAll("*").forEach((n) => n.remove());
//   const box = document.getElementById("game");
//   const num = 3;
//   for (let i = 0; i < num * num; i += 1) {
//     const row = document.createElement("div");
//     box.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
//     box.style.gridTemplateRows = `repeat(${num}, 1fr)`;
//     box.appendChild(row).classList.add(`box${i}`);
//     // add function that makes the box an object that represents board
//   }
// }
