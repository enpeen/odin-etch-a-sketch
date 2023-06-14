const container = document.getElementById("container");
container.style.width = "640px";
container.style.height = "640px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = "2px solid black";

let gridSize = 16;

function generateGrid() {
    let flexBasis = 100 / gridSize;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const innerDiv = document.createElement("div");
        innerDiv.className = "innerDiv";
        innerDiv.style.flexGrow = "1";
        innerDiv.style.flexBasis = flexBasis + "%";
        innerDiv.addEventListener("mouseenter", function() {
            innerDiv.style.backgroundColor = "black";
        });
        container.appendChild(innerDiv);
    }

}

function removeGrid() {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const divs = document.querySelector(".innerDiv");
        container.removeChild(divs);
    }
}

generateGrid();

const changeGridSize = document.getElementById("changeGridSize");
changeGridSize.addEventListener("click", function() {
    let gridSizeQuery = prompt("Enter a number of squares per axis (from 1 up to a 100, default is 16). More squares means more detailed canvas");
    if (gridSizeQuery == undefined) {
        //nothing, close the window
    } else if (gridSizeQuery < 1 || gridSizeQuery > 100 || isNaN(gridSizeQuery)) {
        alert("Please enter a valid value.");
    } else {
        removeGrid();
        gridSize = gridSizeQuery;
        generateGrid();
    }
});


const rgb = document.getElementById("rgb");
rgb.addEventListener("click", function() {
    const divs = document.querySelectorAll(".innerDiv");
    divs.forEach(function(div) {
        div.addEventListener("mouseenter", function() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let randomColor = "rgb("+r+", "+g+", "+b+")";
                div.style.backgroundColor = randomColor;
        });
    });
});

const black = document.getElementById("black");
black.addEventListener("click", function() {
    const divs = document.querySelectorAll(".innerDiv");
    divs.forEach(function(div) {
        div.addEventListener("mouseenter", function() {
            div.style.backgroundColor = "black";
        });
    });
});

const gradient = document.getElementById("gradient");
gradient.addEventListener("click", function() {
    const divs = document.querySelectorAll(".innerDiv");
    divs.forEach(function(div) {
        let eventCount = 255;
        div.addEventListener("mouseenter", function() {
            eventCount = eventCount - 25.5;
            div.style.backgroundColor = "rgb("+eventCount+", "+eventCount+", "+eventCount+")";
        });
    });
})

const clearCanvas = document.getElementById("clearCanvas");
clearCanvas.addEventListener("click", function() {
    const divs = document.querySelectorAll(".innerDiv");
    divs.forEach(function(div) {
        div.style.backgroundColor = "white";
    });
});

