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
  };
}

// create a function that represents the gameboard with an array
function gameboard() {
  // create board
  const game = {
    board: [
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2]
    ],
    result: "in progess"
  };
  const gamecopy = {};
  Object.assign(gamecopy, game);
  return {
    gamecopy
  };
}

// gameboard module
const gameController = (() => {
  // get gameboard function
  gameboard();
  const gamestate = gameboard().gamecopy;
  const boardArr = gameboard().gamecopy.board;
  let gameResult = gameboard().gamecopy.result;

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
  const notready = document.getElementById("notready");

  // new newgame function
  const fillarray = () => {
    let l = 0;
    for (let j = 0; j < 3; j += 1) {
      for (let k = 0; k < 3; k += 1) {
        const newdiv = document.getElementById(`box${l}`);
        boardArr[k][j] = newdiv.textContent;
        l += 1;
        console.log(l);
        console.log(boardArr[k][j]);
      }
    }
  };

  // function when newgame button is clicked
  newbutton.onclick = function newgame() {
    console.log(gamestate.gofirst);
    const name1 = newPlayer().player1.name;
    const name2 = newPlayer().player2.name;

    if (name1 !== "" && name2 !== "" && gamestate.next === "x") {
      turnplayer.textContent = `It is ${name1}'s turn! Place your X.`;
    } else if (name1 !== "" && name2 !== "" && gamestate.next === "o") {
      turnplayer.textContent = `It is ${name2}'s turn! Place your O.`;
    }

    if (
      (name1 !== "" && name2 !== "" && gamestate.gofirst === "x") ||
      (name1 !== "" && name2 !== "" && gamestate.gofirst === "o")
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
            gamestate.next === "x" &&
            turnplayer.textContent.includes("turn")
          ) {
            newbox.textContent = "x";
            gamestate.next = "o";
          } else if (
            newbox.textContent === "" &&
            gamestate.next === "o" &&
            turnplayer.textContent.includes("turn")
          ) {
            newbox.textContent = "o";
            gamestate.next = "x";
          }
        };
      }
    } else {
      notready.style.display = "block";
    }
    fillarray();
  };

  // if "X" goes first
  const goingfirstX = () => {
    const boxexists = document.getElementById("box1");
    if (boxexists === null) {
      x.style.color = "green";
      o.style.color = "white";
      gamestate.gofirst = "x";
      gamestate.next = "x";
      console.log(gamestate);
    } else {
      // do nothing
    }
  };

  // if "O" goes first
  const goingfirstO = () => {
    const boxexists = document.getElementById("box1");
    if (boxexists === null) {
      o.style.color = "green";
      x.style.color = "white";
      gamestate.next = "o";
      gamestate.gofirst = "o";
      console.log(gamestate);
    } else {
      // do nothing
    }
  };

  // reset function
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

    gamestate.next = "";
    gamestate.gofirst = "";
    o.style.color = "";
    x.style.color = "";
    gameResult = "in progress";
  };

  // if "X" wins function
  const winnerX = () => {
    const name1 = newPlayer().player1.name;
    gameResult = "Player 1 wins!";
    turnplayer.textContent = `${name1}'s the Winner!`;
    turnplayer.style.fontSize = "30px";
    turnplayer.style.color = "Green";
  };

  // if "O" wins function
  const winnerO = () => {
    const name2 = newPlayer().player2.name;
    gameResult = "Player 2 wins!";
    turnplayer.textContent = `${name2}'s the Winner!`;
    turnplayer.style.fontSize = "30px";
    turnplayer.style.color = "Green";
  };

  // checks if winner function
  const iswinner = () => {
    const box1 = document.getElementById("box0");
    const box2 = document.getElementById("box1");
    const box3 = document.getElementById("box2");
    const box4 = document.getElementById("box3");
    const box5 = document.getElementById("box4");
    const box6 = document.getElementById("box5");
    const box7 = document.getElementById("box6");
    const box8 = document.getElementById("box7");
    const box9 = document.getElementById("box8");

    switch ("xxx") {
      case boardArr[0][0] + boardArr[0][1] + boardArr[0][2]:
        box1.style.color = "green";
        box4.style.color = "green";
        box7.style.color = "green";
        winnerX();
        break;
      case boardArr[1][0] + boardArr[1][1] + boardArr[1][2]:
        box2.style.color = "green";
        box5.style.color = "green";
        box8.style.color = "green";
        winnerX();
        break;
      case boardArr[2][0] + boardArr[2][1] + boardArr[2][2]:
        box3.style.color = "green";
        box6.style.color = "green";
        box9.style.color = "green";
        winnerX();
        break;
      case boardArr[0][0] + boardArr[1][0] + boardArr[2][0]:
        box1.style.color = "green";
        box2.style.color = "green";
        box3.style.color = "green";
        winnerX();
        break;
      case boardArr[0][1] + boardArr[1][1] + boardArr[2][1]:
        box4.style.color = "green";
        box5.style.color = "green";
        box6.style.color = "green";
        winnerX();
        break;
      case boardArr[0][2] + boardArr[1][2] + boardArr[2][2]:
        box7.style.color = "green";
        box8.style.color = "green";
        box9.style.color = "green";
        winnerX();
        break;
      case boardArr[0][0] + boardArr[1][1] + boardArr[2][2]:
        box1.style.color = "green";
        box5.style.color = "green";
        box9.style.color = "green";
        winnerX();
        break;
      case boardArr[0][2] + boardArr[1][1] + boardArr[2][0]:
        box7.style.color = "green";
        box5.style.color = "green";
        box3.style.color = "green";
        winnerX();
        break;
      default:
      // do nothing
    }
    switch ("ooo") {
      case boardArr[0][0] + boardArr[0][1] + boardArr[0][2]:
        box1.style.color = "green";
        box4.style.color = "green";
        box7.style.color = "green";
        winnerO();
        break;
      case boardArr[1][0] + boardArr[1][1] + boardArr[1][2]:
        box2.style.color = "green";
        box5.style.color = "green";
        box8.style.color = "green";
        winnerO();
        break;
      case boardArr[2][0] + boardArr[2][1] + boardArr[2][2]:
        box3.style.color = "green";
        box6.style.color = "green";
        box9.style.color = "green";
        winnerO();
        break;
      case boardArr[0][0] + boardArr[1][0] + boardArr[2][0]:
        box1.style.color = "green";
        box2.style.color = "green";
        box3.style.color = "green";
        winnerO();
        break;
      case boardArr[0][1] + boardArr[1][1] + boardArr[2][1]:
        box4.style.color = "green";
        box5.style.color = "green";
        box6.style.color = "green";
        winnerO();
        break;
      case boardArr[0][2] + boardArr[1][2] + boardArr[2][2]:
        box7.style.color = "green";
        box8.style.color = "green";
        box9.style.color = "green";
        winnerO();
        break;
      case boardArr[0][0] + boardArr[1][1] + boardArr[2][2]:
        box1.style.color = "green";
        box5.style.color = "green";
        box9.style.color = "green";
        winnerO();
        break;
      case boardArr[0][2] + boardArr[1][1] + boardArr[2][0]:
        box7.style.color = "green";
        box5.style.color = "green";
        box3.style.color = "green";
        winnerO();
        break;
      default:
      // do nothing
    }
  };

  // game function
  game.onclick = function checkwin() {
    const name1 = newPlayer().player1.name;
    const name2 = newPlayer().player2.name;
    let divnum = 0;
    let emptyspace = 0;
    if (gameResult.includes("win")) {
      // do nothing
    } else {
      for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
          const newbox = document.getElementById(`box${divnum}`);
          boardArr[j][i] = newbox.textContent;
          if (boardArr[j][i] === "") {
            emptyspace += 1;
          }
          console.log("this is l", emptyspace);
          divnum += 1;
          console.log(divnum);
          console.log(boardArr[j][i]);
        }
      }

      if (gamestate.next === "x" && emptyspace > 0) {
        turnplayer.textContent = `It is ${name1}'s turn place your x!`;
        iswinner();
      } else if (gamestate.next === "o" && emptyspace > 0) {
        turnplayer.textContent = `It is ${name2}'s turn place your o!`;
        iswinner();
      }
      if (emptyspace === 0) {
        iswinner();
        if (gameResult.includes("win")) {
          // do nothing
        } else {
          gameResult = "Draw";
          turnplayer.style.fontSize = "30px";
          turnplayer.style.color = "DarkOrange";
          turnplayer.textContent = "It's a Draw!";
          for (let i = 0; i < 9; i += 1) {
            const box = document.getElementById(`box${i}`);
            box.style.color = "DarkOrange";
          }
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
})();
