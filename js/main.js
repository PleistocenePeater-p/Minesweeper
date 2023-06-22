/*----- constants -----*/
const COLORS = {
    "0": "lightgray",
    "1": "yellow",
    "2": "red"
  }
  
  const ADJACENT_INTEGER_COLOR = {
    "1": "blue",
    "2": "green",
    "3": "red",
    "4": "purple",
    "5": "maroon",
    "6": "teal",
    "7": "magenta",
    "8": "black"
  }
  
  const INNER_TEXT = {
    "0": "",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8"
  }
  
  /*----- state variables -----*/
  let board;
  let gameOver;
  const mineTotal = 10;
  const boardScale = 10;
  let mine = "mine"; //sanity check
  
  /*----- cached elements  -----*/
  const playAgainBtn = document.querySelector("button")
  
  
  /*----- event listeners -----*/
  
  
  /*----- functions -----*/
  init();
  function init() {
    // rotate the board array 90 degrees counter-clockwise
    board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 4
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // col 9
    ];
    console.table(board);
    gameOver = null;
    render();
  }
  
  function render() {
    renderBoard();
    makeMines();
    renderControls(); //hide/show UI elements/controls
  }
  function renderBoard() {
    board.forEach(function(colArr, colIdx) {
      colArr.forEach(function(cellVal, rowIdx) {
        console.log(cellVal, rowIdx)
        const cellId = `c${colIdx}r${rowIdx}`;
        const cellEl = document.getElementById(cellId);
        cellEl.style.backgroundColor = COLORS[cellVal];
        //            cellEl.style.color = ADJACENT_INTEGER['1'];
        cellEl.innerText = INNER_TEXT[0];
      });
    });
  };
  function renderControls() {
    playAgainBtn.style
  };
  
  function makeMines() {
    let minesToMake = 10;
    while (minesToMake >= 0) {
      const randomRow = Math.floor(Math.random() * boardScale);
      const randomCol = Math.floor(Math.random() * boardScale);
      if (board[randomRow][randomCol] != mine || "mine") { //Sanity check: displays 10 "mines" randomly w/i board
        board[randomRow][randomCol] = mine;
      minesToMake--;
      }
    }
  }


  //boolean mines
    //get/setAttribute
  //To do:
  //function checkMine + eventListener "click"
  // if (board[row][column] === mine || "mine") {
  //     gameOver();
  // }

  //revealCell

  //checkAdjacent
  //  flood recursion 0 = ""