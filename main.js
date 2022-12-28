//set impt constants and variables

const container = document.querySelector('#container');
const rows = document.querySelector('gridRow');
const cells = document.querySelector('cell');

//make default grid
function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}

//make rows
function makeRows(x) {
    for (r = 0; r < x; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
    }
}

//make columns
function makeColumns(y) {
    for(i = 0; i<rows.length; i++) {
        for(j = 0; j<y; j++){
            let newCells = document.createElement('div');
            container.appendChild(newCells).className = "cell";
        }
    }
}

defaultGrid();