const board = {
  gameboard : ["", "", "", "", "", "", "", "", ""],
  createBoard : function() {
    const board = document.querySelector(".game")
    for (let x = 0; x < 9; x++) {
      const cell = document.createElement("button")
      cell.classList.add("cell")
      cell.setAttribute("cellIndex", `${x}`)
      board.appendChild(cell)
    }
  },
  updateCell : function(marker) {
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
      cell.addEventListener("click", () => {
        const index = cell.getAttribute("cellIndex")
        cell.textContent = marker;
        console.log(Number(index))
      })
    });
  },
}

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
  board.gameboard[index] += marker
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

function initialise() {
  board.createBoard()
  const player1 = createPlayer("player 1", "X")
  const player2 = createPlayer("player 2", "O")

  let currentPlayer;
  let playerCounter = 9;
  let running = true;
  while (running) {
    if (playerCounter % 2 === 0) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }

    board.updateCell(currentPlayer.marker)
    addMarker(currentPlayer.marker, index)

    playerCounter--
    const won = checkWin()
    if (won) {
      running = false
      console.log(`winner is ${currentPlayer.name}`)
      break
    }
  }
  console.log(board.gameboard)
}


initialise()