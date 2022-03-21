table = document.getElementById("tab");

walls.onclick = function() {
    colorWalls();
}
function colorWalls() {
    let cells = document.getElementsByClassName("cell");
    let isThereAtribulte = cells[0].hasAttribute("onclick");
    if(isThereAtribulte) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeAttribute("onclick");
        }
    }
    for(let i = 0; i < cells.length; i++) {
        cells[i].setAttribute("onclick", "this.style.backgroundColor = '#777777FF'");
    }
}

start.onclick = function() {
    colorStart();
}
function colorStart() {
    let cells = document.getElementsByClassName("cell");
    let isThereAtribulte = cells[0].hasAttribute("onclick");
    if(isThereAtribulte) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeAttribute("onclick");
        }
    }
    for(let i = 0; i < cells.length; i++) {
        cells[i].setAttribute("onclick", "this.style.backgroundColor = '#FF64EEFF'");
    }
}

finish.onclick = function() {
    colorFinish();
}
function colorFinish() {
    let cells = document.getElementsByClassName("cell");
    let isThereAtribulte = cells[0].hasAttribute("onclick");
    if(isThereAtribulte) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeAttribute("onclick");
        }
    }
    for(let i = 0; i < cells.length; i++) {
        cells[i].setAttribute("onclick", "this.style.backgroundColor = '#6F92FFFF'");
    }
}
free.onclick = function() {
    colorFree();
}
function colorFree() {
    let cells = document.getElementsByClassName("cell");
    let isThereAtribulte = cells[0].hasAttribute("onclick");
    if(isThereAtribulte) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeAttribute("onclick");
        }
    }
    for(let i = 0; i < cells.length; i++) {
        cells[i].setAttribute("onclick", "this.style.backgroundColor = 'white'");
    }
}

let buttonDirect = document.getElementById("direct");
let buttonDiagonal = document.getElementById("diagonal");
direct.onclick = function() {
    diagonalHeuristic = false;
    buttonDiagonal.style.backgroundColor = "white";
    buttonDirect.style.backgroundColor = "#97ffed";
}
diagonal.onclick = function() {
    diagonalHeuristic = true;
    buttonDirect.style.backgroundColor = "white";
    buttonDiagonal.style.backgroundColor = "#97ffed";
}