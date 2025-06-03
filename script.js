// Selects container div.
const container = document.querySelector("#container");
const containerSize = container.getBoundingClientRect();

// Creates button for user to change grid size.
btn = document.createElement("button");
document.body.insertBefore(btn, container);
btn.textContent = "Set Grid Size";
btn.style.textAlign = "center";
btn.style.width = "150px";
btn.style.height = "50px";
btn.style.marginLeft = "50%";
btn.style.marginRight = "50%";
btn.style.marginBottom = "20px";

// Initializes grid with default values.
let gridSize = 16;
let gridCoordsW = (containerSize.width / gridSize);
let gridCoordsH = (containerSize.height / gridSize);

// Creates a grid of boxes.
function createGrid(size) {
    for (i = 0; i < (size * size); i++) {
        // Creates box div.
        const box = document.createElement("div");
        container.appendChild(box);
        box.style.display = "flex";
        box.style.height = `${gridCoordsH}` + `px`;
        box.style.width = `${gridCoordsW}` + `px`;

        // Checks mouse pointer location and colors individual boxes when the pointer enters box elements.
        box.addEventListener("mouseover", () => {
            // Creates pink class.
            box.classList.add(`pink`);
            box.style.backgroundColor = "#ff06b5"; // Hot pink
        });
    };
};

createGrid(gridSize);

// Adds event listener to button and prompts user to enter a number to determine grid size.
btn.addEventListener("click", () => {
    const gridPrompt = prompt("Enter grid size up to 100", 16);
    parseInt(gridPrompt);
    gridSize = gridPrompt;
    gridCoordsW = (containerSize.width / gridPrompt);
    gridCoordsH = (containerSize.height / gridPrompt);
    const box = document.createElement("div");
    container.replaceChildren(box);

    if ((gridPrompt != null) && (gridPrompt <= 100) && (gridPrompt > 0)) {
        createGrid(gridPrompt);
    } else if (gridPrompt > 100) {
        alert ( `That number is too high. Try again.` );
    } else { `Please use a number between 1-100.` };
});
