const container = document.getElementById("container");
container.style.width = "640px";
container.style.height = "640px";
container.style.display = "flex";
container.style.flexWrap = "wrap";


let gridSize = prompt("How many per side");
let calc1 = 640 / gridSize;
let calc2 = 640 / gridSize;

for (let i = 0; i < (gridSize * gridSize); i++) {
    const innerDiv = document.createElement("div");
    innerDiv.className = "innerDiv";
    innerDiv.textContent = "etch";
    innerDiv.style.color = "blue";
    innerDiv.style.flexGrow = "1";
    innerDiv.style.width = calc1 + "px";
    innerDiv.style.height = calc2 + "px";


    container.appendChild(innerDiv);
}