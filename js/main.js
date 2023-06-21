/*----- constants -----*/
const COLORS = {
    "0": "gray",
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


/*----- cached elements  -----*/


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
    winner = null;
    render();
}

function render() {
    renderBoard();
    renderControls(); //hide/show UI elements/controls
}
function renderBoard() {
    board.forEach(function (colArr, colIdx) {
        colArr.forEach(function (cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
//            cellEl.innerText = INNER_TEXT[cellVal];
//            cellEl.innerTextColor = ADJACENT_INTEGER_COLOR[cellVal];
        });
    });
};
function renderControls() { };