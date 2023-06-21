/*----- constants -----*/


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();
function init() {
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
    winner = null;
    render();
}

function render() {
    renderBoard();
    renderControls(); //hide/show UI elements/controls
}
    function renderBoard(){};
    function renderControls(){};