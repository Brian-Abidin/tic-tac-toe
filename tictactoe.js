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
    readytext2.textContent = "Player 2 is not ready!";
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
  // const gamelength = gamestate.board.length;
  console.log(gamestate1);
  // variables
  const game = document.getElementById("game");
  const x = document.getElementById("symbolX");
  const o = document.getElementById("symbolO");
  const info = document.getElementById("playernames");
  const newbutton = document.getElementById("newbtn");
  const resetbutton = document.getElementById("reset");
  const readytext = document.getElementById("readyp1");
  const readytext2 = document.getElementById("readyp2");
  const turnplayer = document.getElementById("turnplayer");

  // new newgame function
  const fillarray = () => {
    let l = 0;
    for (let j = 0; j < 3; j += 1) {
      for (let k = 0; k < 3; k += 1) {
        const newdiv = document.getElementById(`box${l}`);
        gamestate1.board[k][j] = newdiv.textContent;
        l += 1;
        console.log(l);
        console.log(gamestate1.board[k][j]);
      }
    }
  };
  newbutton.onclick = function newgame() {
    console.log(gamestate1.gofirst);
    const name1 = newPlayer().player1.name;
    const name2 = newPlayer().player2.name;

    if (gamestate1.next === "x") {
      turnplayer.textContent = `It is ${name1}'s turn place your x!`;
    } else if (gamestate1.next === "o") {
      turnplayer.textContent = `It is ${name2}'s turn place your o!`;
    }

    if (
      (name1 !== "" && name2 !== "" && gamestate1.gofirst === "x") ||
      gamestate1.gofirst === "o"
    ) {
      resetbutton.style.display = "block";
      game.style.display = "grid";
      turnplayer.style.display = "grid";

      notready.style.display = "none";
      info.style.display = "none";
      newbutton.style.display = "none";

      console.log(newPlayer().player1.name);
      console.log(newPlayer().player2.name);
      game.querySelectorAll("*").forEach((n) => n.remove());
      const num = 3;
      for (let i = 0; i < num * num; i += 1) {
        const row = document.createElement("div");
        game.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        game.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        game.appendChild(row).classList.add(`box${i}`);
        row.id = `box${i}`;
        const newbox = document.getElementById(`box${i}`);
        newbox.onclick = function symbol() {
          if (
            newbox.textContent === "" &&
            gamestate1.next === "x" &&
            turnplayer.textContent.includes("turn")
          ) {
            newbox.textContent = "x";
            gamestate1.next = "o";
          } else if (
            newbox.textContent === "" &&
            gamestate1.next === "o" &&
            turnplayer.textContent.includes("turn")
          ) {
            newbox.textContent = "o";
            gamestate1.next = "x";
          }
        };
      }
    } else {
      notready.style.display = "block";
      // add function that makes the box an object that represents board
    }
    fillarray();
  };
  const goingfirstX = () => {
    const boxexists = document.getElementById("box1");
    if (boxexists === null) {
      x.style.color = "green";
      o.style.color = "white";
      gamestate1.gofirst = "x";
      gamestate1.next = "x";
      console.log(gamestate1);
    } else {
      // do nothing
    }
  };
  const goingfirstO = () => {
    const boxexists = document.getElementById("box1");
    if (boxexists === null) {
      o.style.color = "green";
      x.style.color = "white";
      gamestate1.next = "o";
      gamestate1.gofirst = "o";
      console.log(gamestate1);
    } else {
      // do nothing
    }
  };
  const reset = () => {
    const node = document.getElementById("game");
    node.querySelectorAll("*").forEach((n) => n.remove());

    info.style.display = "block";
    newbutton.style.display = "block";

    newPlayer().player1.name = "";
    newPlayer().player2.name = "";

    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";

    readytext.textContent = "Player 1 is not ready!";
    readytext2.textContent = "Player 2 is not ready!";
    readytext.style.color = "red";
    readytext2.style.color = "red";

    game.style.display = "none";
    resetbutton.style.display = "none";
    turnplayer.style.display = "none";
    turnplayer.style.fontSize = "medium";
    turnplayer.style.color = "black";

    gamestate1.next = "";
    gamestate1.gofirst = "";
    o.style.color = "";
    x.style.color = "";
  };
  const winnerX = () => {
    const name1 = newPlayer().player1.name;
    turnplayer.textContent = `${name1}'s the Winner!`;
    turnplayer.style.fontSize = "30px";
    turnplayer.style.color = "Green";
  };
  const winnerO = () => {
    const name2 = newPlayer().player2.name;
    turnplayer.textContent = `${name2}'s the Winner!`;
    turnplayer.style.fontSize = "30px";
    turnplayer.style.color = "Green";
  };
  const iswinner = () => {
    switch ("xxx") {
      case gamestate1.board[0][0] +
        gamestate1.board[0][1] +
        gamestate1.board[0][2]:
        winnerX();
        break;
      case gamestate1.board[1][0] +
        gamestate1.board[1][1] +
        gamestate1.board[1][2]:
        winnerX();
        break;
      case gamestate1.board[2][0] +
        gamestate1.board[2][1] +
        gamestate1.board[2][2]:
        winnerX();
        break;
      case gamestate1.board[0][0] +
        gamestate1.board[1][0] +
        gamestate1.board[2][0]:
        winnerX();
        break;
      case gamestate1.board[0][1] +
        gamestate1.board[1][1] +
        gamestate1.board[2][1]:
        winnerX();
        break;
      case gamestate1.board[0][2] +
        gamestate1.board[1][2] +
        gamestate1.board[2][2]:
        winnerX();
        break;
      case gamestate1.board[0][0] +
        gamestate1.board[1][1] +
        gamestate1.board[2][2]:
        winnerX();
        break;
      case gamestate1.board[0][2] +
        gamestate1.board[1][1] +
        gamestate1.board[2][0]:
        winnerX();
        break;
      default:
      // do nothing
    }
    switch ("ooo") {
      case gamestate1.board[0][0] +
        gamestate1.board[0][1] +
        gamestate1.board[0][2]:
        winnerO();
        break;
      case gamestate1.board[1][0] +
        gamestate1.board[1][1] +
        gamestate1.board[1][2]:
        winnerO();
        break;
      case gamestate1.board[2][0] +
        gamestate1.board[2][1] +
        gamestate1.board[2][2]:
        winnerO();
        break;
      case gamestate1.board[0][0] +
        gamestate1.board[1][0] +
        gamestate1.board[2][0]:
        winnerO();
        break;
      case gamestate1.board[0][1] +
        gamestate1.board[1][1] +
        gamestate1.board[2][1]:
        winnerO();
        break;
      case gamestate1.board[0][2] +
        gamestate1.board[1][2] +
        gamestate1.board[2][2]:
        winnerO();
        break;
      case gamestate1.board[0][0] +
        gamestate1.board[1][1] +
        gamestate1.board[2][2]:
        winnerO();
        break;
      case gamestate1.board[0][2] +
        gamestate1.board[1][1] +
        gamestate1.board[2][0]:
        winnerO();
        break;
      default:
      // do nothing
    }
  };
  game.onclick = function checkwin() {
    const name1 = newPlayer().player1.name;
    const name2 = newPlayer().player2.name;
    let divnum = 0;
    let emptyspace = 0;
    if (
      turnplayer.textContent.includes("Winner") ||
      turnplayer.textContent.includes("Draw")
    ) {
      // do nothing
    } else {
      for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
          const newbox = document.getElementById(`box${divnum}`);
          gamestate1.board[j][i] = newbox.textContent;
          if (gamestate1.board[j][i] === "") {
            emptyspace += 1;
          }
          console.log("this is l", emptyspace);
          divnum += 1;
          console.log(divnum);
          console.log(gamestate1.board[j][i]);
        }
      }

      if (gamestate1.next === "x" && emptyspace > 0) {
        turnplayer.textContent = `It is ${name1}'s turn place your x!`;
        iswinner();
      } else if (gamestate1.next === "o" && emptyspace > 0) {
        turnplayer.textContent = `It is ${name2}'s turn place your o!`;
        iswinner();
      }
      if (emptyspace === 0) {
        iswinner();
        if (turnplayer.textContent.includes("Winner!")) {
          // do nothing
        } else {
          turnplayer.style.fontSize = "30px";
          turnplayer.style.color = "Orange";
          turnplayer.textContent = "It's a Draw!";
        }
      }
    }
  };

  // return functions
  return {
    winnerO,
    winnerX,
    iswinner,
    fillarray,
    goingfirstX,
    goingfirstO,
    reset
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
