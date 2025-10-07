const board = {
  gameboard : ["", "", "", "", "", "", "", "", ""],
  player1 : createPlayer("player 1", "X"),
  player2 : createPlayer("player 2", "O"),
  createBoard : function() {
    const board = document.querySelector(".game")
    for (let x = 0; x < 9; x++) {
      const cell = document.createElement("button")
      cell.classList.add("cell")
      cell.setAttribute("cellIndex", `${x}`)
      board.appendChild(cell)
    }
  },
}

let currentPlayer = board.player2;
let drawCounter = 9;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function createPlayer(name, marker) {
  return {name, marker}
}

function addMarker(marker, index) {
  board.gameboard[index] = marker
}

function checkWin() {
  roundWon = false;

  for (let x = 0; x < winConditions.length; x++) {
    const condition = winConditions[x];
    const firstCell = board.gameboard[condition[0]];
    const secondCell = board.gameboard[condition[1]];
    const thirdCell = board.gameboard[condition[2]];

    if (firstCell == "" || secondCell == "" || thirdCell == "") {
      continue;
    }

    if (firstCell == secondCell && secondCell == thirdCell) {
      roundWon = true;
      break;
    }
  }

  return roundWon;
}

function reset() {
  const resetButton = document.querySelector(".reset")
  const cells = document.querySelectorAll(".cell")
  const statusText = document.querySelector(".statusText")
  resetButton.addEventListener("click", () => {
    board.gameboard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = board.player1;
    statusText.textContent = `current player: ${currentPlayer.name}`
    cells.forEach(cell => cell.textContent = "")
    drawCounter = 9
  })
}

function initialise() {
  board.createBoard()
  const cells = document.querySelectorAll(".cell")
  const statusText = document.querySelector(".statusText")
  const resetButton = document.querySelector(".reset")
  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (cell.textContent === "" && checkWin() === false) {
        currentPlayer = currentPlayer.marker === "X" ? currentPlayer = board.player2 : currentPlayer = board.player1;
        statusText.textContent = `current player: ${currentPlayer.name}`
        const index = cell.getAttribute("cellindex")
        cell.textContent = currentPlayer.marker
        addMarker(currentPlayer.marker, index)
        drawCounter--
      }

      if (checkWin()) { 
        statusText.textContent = `winner is ${currentPlayer.name}`
      }

      if (checkWin() === false && drawCounter === 0) {
        statusText.textContent = "draw"
      }

    })
  })
  resetButton.addEventListener("click", reset())
}

initialise()