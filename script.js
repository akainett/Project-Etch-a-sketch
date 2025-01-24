document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#grid-container');
    const newGridBtn = document.querySelector('#newGridBtn');

    function createGrid(size) {
        // Clear the old grid by setting textContent to an empty string
        container.textContent = '';

        // Calculate the size of each square
        const squareSize = 960 / size;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            
            square.addEventListener('mouseover', function() {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            });
            container.appendChild(square);
        }
    }
    createGrid(16);

    // When the button is clicked, ask for new grid size
    newGridBtn.addEventListener('click', function() {
        let size = prompt("How many squares per side do you want? (Max 100)");
        
        if (size !== null && size !== "") {
            const numberSize = parseInt(size);
            if (numberSize > 0 && numberSize <= 100) {
                createGrid(numberSize);
            } else {
                alert("Please enter a number between 1 and 100.");
            }
        }
    });
});