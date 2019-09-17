let cellRoot = 16;
const container = document.querySelector(".container");
const button = document.querySelector("button")

function getRandomRGBvalue() {
    let num = Math.floor(Math.random() * 256);
    return num;
}

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
        div.addEventListener("mouseover", (e) => {
            e.target.style.transition = "background, 0.2s";
            // logic to progressively darken the div on mouseover
            let currentColor = e.target.style.backgroundColor;
            if (!currentColor) {
                e.target.style.backgroundColor = `rgb(${255 - 26}, ${255 - 26}, ${255 - 26})`;
            } else {
                let rgbValue = currentColor.substring(currentColor.lastIndexOf("(") + 1, currentColor.indexOf(","));
                e.target.style.backgroundColor = `rgb(${rgbValue - 26}, ${rgbValue - 26}, ${rgbValue - 26})`;
            }   
            // logic to fill div with a random color *must change mouseover to mouseenter 
            // e.target.style.backgroundColor = `rgb(${getRandomRGBvalue()}, ${getRandomRGBvalue()}, ${getRandomRGBvalue()})`;
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