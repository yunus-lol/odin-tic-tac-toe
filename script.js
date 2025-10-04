const board = {
  gameboard : ["", "", "", "", "", "", "", "", ""]
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

    let choice = prompt("Enter index")

    addMarker(currentPlayer.marker, choice)
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