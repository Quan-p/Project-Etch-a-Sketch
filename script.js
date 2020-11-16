const container = document.getElementById('container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        cell.onmouseover = function() {
            this.style.background = 'rgb(244, 212, 124)';
        }
    };
}

function clearGrid() {
    var cells = document.getElementsByClassName('grid-item');
    for (i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "rgb(32, 105, 224)";
    }
}

var slider = document.getElementById("gridRange");
document.getElementById("gridRange").step = "5";
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
output.innerHTML = this.value;
}

function applyGrid() {
    var gridSize = document.getElementById("gridRange").value;
    const container = document.getElementById('container');
    if (container.hasChildNodes) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);  
        }
    }
makeGrid(gridSize, gridSize);
}