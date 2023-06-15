const container = document.getElementById("container");
container.style.width = "640px";
container.style.height = "640px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = "2px solid black";

let gridSize = 16;
let color;

function generateGrid() {
    let flexBasis = 100 / gridSize;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const innerDiv = document.createElement("div");
        innerDiv.className = "innerDiv";
        innerDiv.style.flexGrow = "1";
        innerDiv.style.flexBasis = flexBasis + "%";
        container.appendChild(innerDiv);
    }
}

function removeGrid() {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const divs = document.querySelector(".innerDiv");
        container.removeChild(divs);
    }
}

const changeGridSize = document.getElementById("changeGridSize");
changeGridSize.addEventListener("click", function() {
    let gridSizeQuery = prompt("Enter a number of squares per axis (from 1 up to a 100, default is 16). More squares means more detailed canvas");
    if (gridSizeQuery == undefined) {
        //nothing, close the window
    } else if (gridSizeQuery < 1 || gridSizeQuery > 100 || isNaN(gridSizeQuery)) {
        alert("Please enter a valid value");
    } else {
        let preserveColor = color;
        removeGrid();
        gridSize = gridSizeQuery;
        generateGrid();
        if (preserveColor === "black") {
            getBlack();
        } else if (preserveColor === "rgb") {
            getRGB();
        } else {
            getGradient();
        }
    }
});

const rgb = document.getElementById("rgb");
rgb.addEventListener("click", getRGB);

function getRGB() {
    const divs = document.querySelectorAll(".innerDiv");
    color = "rgb";
    divs.forEach(function(div) {
        div.addEventListener("mouseenter", function() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let randomColor = "rgb("+r+", "+g+", "+b+")"; // #543322 alternative color assignment
                div.style.backgroundColor = randomColor;
        });
    });
}

const black = document.getElementById("black");
black.addEventListener("click", getBlack);

function getBlack() {
    const divs = document.querySelectorAll(".innerDiv");
    color = "black";
    divs.forEach(function(div) {
        div.addEventListener("mouseenter", function() { // function(event) { event.target.style.backgroundColor = "black"; }
            div.style.backgroundColor = "black";
        });
    });
}

const gradient = document.getElementById("gradient");
gradient.addEventListener("click", getGradient);

function getGradient() {
    const divs = document.querySelectorAll(".innerDiv");
    color = "gradient";
    divs.forEach(function(div) {
        let shade = 255;
        div.addEventListener("mouseenter", function() {
            shade = shade - 25.5;
            div.style.backgroundColor = "rgb("+shade+", "+shade+", "+shade+")";
        });
    });
}

const clearCanvas = document.getElementById("clearCanvas");
clearCanvas.addEventListener("click", function() {
    const divs = document.querySelectorAll(".innerDiv");
    divs.forEach(function(div) {
        div.style.backgroundColor = "white";
    });
});

generateGrid();
getBlack();
