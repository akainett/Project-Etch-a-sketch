document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#grid-container');

    // Create 256 squares (16x16)
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        
        div.addEventListener('mouseover', function() {
            this.classList.add("hovered")
        });
        container.appendChild(div);
    }
});