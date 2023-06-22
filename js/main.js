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
  document.getElementById("board").addEventListener("click", handleDrop);
  
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
    console.table(board); //logs all mine locations as array table
    gameOver = null;
    
    
    render();
    
    
  }
  
  function handleDrop(evt) {
    console.log(evt.target.id,"inner text"); //logs clicked cell's value
    var cell = evt.target.id;
    const col = evt.target.id[1] // logs the column
    const row = evt.target.id[3] // logs the row
    
    console.log(cell);
    
    



//Copied from renderBoard() below, trying to obtain column index and row index
//     evt.target(function(colArr, colIdx) {
//       colArr.forEach(function(cellVal, rowIdx) {
// //        console.log(cellVal, rowIdx) //logs all cells positions
//         const cellId = `c${colIdx}r${rowIdx}`;
//       })
//     });

    const cellId = board.indexOf(evt.target); //keeping this in here for posterity/ConnectFour
    const cellIdValue = evt.target.innerText;
    if (cellIdValue === -1 || gameOver) return; //guard
    if (cellIdValue === mine) {
      gameOver();
    }
//    if (cellIdValue != mine) {
//
//    }
    render();
  }

//  function gameOver(){};

  //=================Render & Related Functions========================//
  function render() {
    renderBoard();
    makeMines();
    renderControls(); //hide/show UI elements/controls

  }
  function renderBoard() {
    board.forEach(function(colArr, colIdx) {
      colArr.forEach(function(cellVal, rowIdx) {
//        console.log(cellVal, rowIdx) //logs all cells positions
        const cellId = `c${colIdx}r${rowIdx}`;
        const cellEl = document.getElementById(cellId);
        cellEl.style.backgroundColor = COLORS[cellVal];
        //            cellEl.style.color = ADJACENT_INTEGER['1'];
        cellEl.innerText = 1;
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


//===Idea bank===
//boolean mines
//get/setAttribute
//.style.visibility = gameOver ? "visible": "hidden"; vid4, 42:45
//vid4, 50:30 const hideMarker = !board[colIdx].includes(0) //hide marker if no 0s in array// || winner //or if there's a winner
//  

//revealMines

//checkAdjacent
//  flood recursion 0 = ""
