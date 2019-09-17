let cellRoot = 16;
const container = document.querySelector(".container");
const button = document.querySelector("button")

function populateCanvas() {
    container.style.cssText = `grid-template-columns: repeat(${cellRoot}, 1fr)`;
    for (i = 0; i < cellRoot * cellRoot; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
    }
}
populateCanvas();

function colorCanvas() {
    let divs = container.querySelectorAll("div");
    divs.forEach((div) => {
        div.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "blue";
        })
    })
}
colorCanvas();

button.addEventListener("click", (e) => {
    container.innerHTML = "";
    cellRoot = prompt("How many rows and columns would you like?");
    if (!cellRoot) {cellRoot = 16};
    populateCanvas();
    colorCanvas();
})