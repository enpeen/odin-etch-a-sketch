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
    removeGrid();
    gridSize = prompt("Enter a number of squares per axis (up to a 100). More squares means more detailed canvas");
    generateGrid();
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

