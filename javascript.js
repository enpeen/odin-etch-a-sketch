const container = document.getElementById("container");

let gridSize = 256;

for (let i = 0; i < gridSize; i++) {
    let div = document.createElement("div");
    div.style.border = "2px solid black";
    div.style.width = "58px";
    div.style.height = "58px";
    div.textContent = "etch a sketch";
    container.appendChild(div);
}