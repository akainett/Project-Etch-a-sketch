document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#grid-container');

    // Create 256 squares (16x16)
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
});