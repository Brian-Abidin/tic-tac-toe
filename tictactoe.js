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
  const readytext = document.getElementById("readyp1");
  const readytext2 = document.getElementById("readyp2");
  if (pname === "") {
    readytext.style.color = "red";
    readytext.textContent = "Player 1 is not ready!";
  } else {
    readytext.style.color = "green";
    readytext.textContent = `${pname} is ready!`;
  }

  if (pname2 === "") {
    readytext2.style.color = "red";
    readytext2.textContent = "player 2 is not ready!";
  } else {
    readytext2.style.color = "green";
    readytext2.textContent = `${pname2} is ready!`;
  }

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
function gameboard() {
  // create board
  const game = {
    board: [
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2]
    ]
  };
  const gamestate = {};
  Object.assign(gamestate, game);
  return {
    gamestate
  };

  // console.log(game.board[1][2]);
  // displays gameboard over webpage
}

// gameboard module
const gameBoard = (() => {
  gameboard();
  const gamestate1 = gameboard().gamestate;
  console.log(gamestate1.board[1][1]);
  const x = document.getElementById("symbolX");
  const o = document.getElementById("symbolO");
  const clear = () => {
    console.log(gamestate1);
    const notready = document.getElementById("notready");
    const name1 = newPlayer().player1.name;
    const name2 = newPlayer().player2.name;
    if (name1 !== "" && name2 !== "") {
      notready.style.display = "none";
      console.log(newPlayer().player1.name);
      console.log(newPlayer().player2.name);
      const node = document.getElementById("game");
      node.querySelectorAll("*").forEach((n) => n.remove());
      const box = document.getElementById("game");
      const num = 3;
      for (let i = 0; i < num * num; i += 1) {
        const row = document.createElement("div");
        box.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        box.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        box.appendChild(row).classList.add(`box${i}`);
        row.id = `box${i}`;
      }
    } else {
      notready.style.display = "block";
      // add function that makes the box an object that represents board
    }
    // for (let i = 0; i < gamestate[0].length; i += 1) {

    // }
    // for each array inside the game state. make them equal x or o.
  };
  const goingfirstX = () => {
    x.style.color = "green";
    o.style.color = "white";
    gamestate1.gofirst = "x";
    console.log(gamestate1);
  };
  const goingfirstO = () => {
    o.style.color = "green";
    x.style.color = "white";
    gamestate1.gofirst = "o";
    console.log(gamestate1);
  };

  // return functions
  return {
    clear,
    goingfirstX,
    goingfirstO
  };
  // when click change the gamestate symbol to the opposite symbol.
  // for example x -> o when click
  // another function that checkes if 3 in a row has been met
  // if that criteria has been met dispaly winner and cease board
  // functionality.
})();

// gameboard controller module
const gameController = (() => {
  // controls the game
  // Lets the user decide who goes first "X" or "O".
  const start = document.getElementById("newbtn");
  const game = {
    board: [
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2]
    ]
  };
  const box = document.get;

  // console.log(game.board[1][2]);
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
