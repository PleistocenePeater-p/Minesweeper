/*----- constants -----*/


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  // To visualize the board's mapping to the DOM,
  // rotate the board array 90 degrees counter-clockwise
  board = [
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 0
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 1
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 2
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 3
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 4
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 5
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 6
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 7
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 8
    [0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],  // col 9
  ];
  turn = 1;
  winner = null;
  render();
}

function render() {
  
}
