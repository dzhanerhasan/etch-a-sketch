const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear')

function createGrid(size=16) {
    for (let i = 0; i < size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        for (let n = 0; n < size; n++) {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col-div');
            rowDiv.appendChild(colDiv);
        }
        container.appendChild(rowDiv);
    }
    paintSquares();
}

function paintSquares() {
    const grid = document.querySelectorAll('.col-div');
    grid.forEach((square) => {
        square.addEventListener('mouseover', function(event) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = '#' + randomColor;
        });
    });
}

createGrid();

clearBtn.addEventListener('click', function(event) {
    const removeRows = document.querySelectorAll('.row-div');
    removeRows.forEach((row) => {
        row.remove();
    });
    let gridSize = 0;
    do {
        gridSize = prompt("Please enter the size of the grid (from 1 to 100):");
    } while (gridSize < 1 || gridSize > 100);
    createGrid(gridSize);
});